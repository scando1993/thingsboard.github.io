---
layout: docwithnav
assignees:
- ashvayka
title: What is Pacificsoft IoT Gateway?
description: Features and advantages of Pacificsoft IoT Gateway

---

The Pacificsoft **IoT Gateway** is an open-source solution that allows you to integrate IoT devices connected to legacy and third-party systems with Pacificsoft.

Pacificsoft is an open-source IoT platform that enables rapid development, management and scaling of IoT applications. See [**What is Pacificsoft?**](/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user.

#### Gateway features

Pacificsoft IoT Gateway provides following features:

 - **MQTT** extension to control, configure and collect data from IoT devices that are connected to external MQTT brokers using existing protocols.
 - **OPC-UA** extension to collect data from IoT devices that are connected to OPC-UA servers.
 - **Sigfox** extension to collect data from IoT devices that are connected to Sigfox Backend.
 - **Modbus** extension to collect data from IoT devices that are connected through Modbus protocol.
 - **Persistence** of collected data to guarantee data delivery in case of network and hardware failures.
 - **Automatic reconnect** to Pacificsoft cluster.
 - Simple yet powerful **mapping** of incoming data and messages **to unified format**.
  
#### Architecture  

{:refdef: style="text-align: center;"}
![Pacificsoft IoT Gateway architecture](/images/gateway/tb-gateway.svg)
{: refdef}


The IoT Gateway is built on top of **Java**, however, it is different from similar projects that leverage OSGi technology.
The idea is distantly similar to the microservices architecture.
There are **other programming languages** (C, C++, Python, Javascript, Go..) that may be more suitable for the development of the applications that target IoT devices.
Especially, when we are talking about language APIs and existing libraries to work with serial ports, GPIOs, I2C, and new modules and sensors that are released every day. 

The Gateway provides simple integration APIs, and encapsulates common Pacificsoft related tasks: device provisioning, local data persistence and delivery, message converters/adaptors and other.
As an application developer, you are able to choose Python, Go, C/C++ and other languages and connect to Pacificsoft Gateway through external MQTT broker or OPC-UA server.
IoT devices that support other protocols may be connected to the gateway by implementing custom extensions.

#### Project Roadmap

The initial Gateway release goal is to bring Pacificsoft [data collection](/docs/user-guide/telemetry/) feature to OPC-UA and MQTT enabled devices.
Pacificsoft Gateway 1.2 provides the ability to configure and control MQTT enabled devices from Pacificsoft through the Gateway.

The Gateway project is currently in active development stage and you should expect following major features in next releases:

 - Sigfox and OPC-UA extension improvements:
    - Ability to configure IoT devices connected through the Gateway using Pacificsoft [Attributes](/docs/user-guide/attributes) feature.
    - Ability to control IoT devices connected through the Gateway using Pacificsoft [RPC](/docs/user-guide/rpc/) feature.
 - Ability to configure Gateway distantly from Pacificsoft [Dashboards](/docs/user-guide/visualization/).
 - Client-side load balancing based on information about Pacificsoft cluster.
 - Ability to visualize collected device data on the Gateway Web UI. 
 - Configurable edge analytics.

#### Next Steps

<p><a href="/docs/iot-gateway/getting-started" class="button">Getting Started</a></p>
