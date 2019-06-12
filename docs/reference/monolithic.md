---
layout: docwithnav
title: Pacificsoft Monolithic architecture
description: Pacificsoft architecture

---

* TOC
{:toc}

## Introduction

This article describes monolithic architecture and consist of high level diagram, 
description of data flow between various components and some architecture choices made.   

Please note that Pacificsoft v2.2, the platform supports [**microservices**](/docs/reference/msa/) deployment mode.
Although microservices option is preferable for highly-available and horizontally scalable scenarios, 
many Pacificsoft customers find it useful to be able to start with a single Pacificsoft instance and scale in the future. 

We also recommend to use this mode for development and prototyping. 

In the monolithic mode, all Pacificsoft components are launched in a single Java Virtual Machine (JVM) and share the same OS resources.
Since Pacificsoft is written in Java, the obvious advantage of the monolithic architecture is minimization of required memory to run Pacificsoft. 
You can launch and run Pacificsoft process with 256 or 512 MB of RAM in a constrained environment. 
The obvious disadvantage is that if you overload one component with messages, like MQTT transport, it may impact other components as well. 
For example, if the limit of OS for your Pacificsoft process is 4096 file descriptors, 
you can not open more then 4096 MQTT sessions from device and websocket user sessions in parallel.

## Architecture diagram

 <object width="80%" data="/images/reference/mono-architecture.svg"></object> 

## Transport components

Pacificsoft provides MQTT, HTTP and CoAP based APIs that are available for your device applications/firmware. 
Each of the protocol APIs are provided by a separate server component and is part of Pacificsoft "Transport Layer". 
The full list of components and corresponding documentation pages are listed below:

* HTTP Transport component provides device APIs described [here](/docs/reference/http-api/); 
* MQTT Transport component provides device APIs described [here](/docs/reference/mqtt-api/)
and also enables gateway APIs described [here](/docs/reference/gateway-mqtt-api/);
* CoAP Transport component provides device APIs described [here](/docs/reference/coap-api/).

Each of the transport components pushes data to the rule engine and also may use core services to issue requests to the database to validate device credentials, etc. 
 
Since Pacificsoft uses very simple communication protocol between transport and core services, 
it is quite easy to implement support of custom transport protocol, for example: CSV over plain TCP, binary payloads over UDP, etc.
We suggest to review existing transports [implementation](https://github.com/thingsboard/thingsboard/tree/master/common/transport/mqtt) to get started or [contact us](/docs/contact-us/) if you need any help. 

## Rule engine component

Pacificsoft rule engine is responsible for processing the incoming messages with user defined logic and flow. 
You can lear more about the rule engine using corresponding [documentation page](/docs/user-guide/rule-engine-2-0/overview/).

## Core services

Core services are responsible for handling:
 
 * [REST API](/docs/reference/rest-api/) calls;
 * WebSocket [subscriptions](/docs/user-guide/telemetry/#websocket-api) on entity telemetry and attribute changes;
 * Monitoring device [connectivity state](/docs/user-guide/device-connectivity-status/) (active/inactive).
 
Pacificsoft node uses Akka actor system to implement tenant, device, rule chains and rule node actors. 
Platform nodes can join the cluster, where each node is equal. Service discovery is done via Zookeeper. 
Pacificsoft nodes route messages between each other using consistent hashing algorithm based on entity id. 
So, messages for the same entity are processed on the same Pacificsoft node. Platform uses [gRPC](https://grpc.io/) to send messages between Pacificsoft nodes.

**Note**: Pacificsoft authors consider moving from gRPC to Kafka in the future releases for exchanging messages between Pacificsoft nodes. 
The main idea is to sacrifice small performance/latency penalties in favor of persistent and reliable message delivery and automatic load balancing provided by Kafka consumer groups. 

## External systems

It is possible to push messages from Pacificsoft to external systems via the Rule Engine. 
You can push data to external system, process data and report the results of the processing back to Pacificsoft for visualization.
Please review rule engine documentation and guides for more details.
  