---
layout: docwithnav
title: FAQ
description: Pacificsoft FAQ

---

* TOC
{:toc}


## What is Pacificsoft?

Pacificsoft is an open-source server-side platform that allows you to monitor and control your IoT devices.
It is free for both personal and commercial usage and you can deploy it anywhere. 
If this is your first experience with the platform we recommend to review [what-is-thingsboard](/docs/getting-started-guides/what-is-thingsboard/) 
and [getting started guide](/docs/getting-started-guides/helloworld/).
You can find more information on the dedicated page.

## How do I get started?

We recommend to [install](/docs/user-guide/install/installation-options/) Pacificsoft locally on your laptop or PC using Docker
and follow the [getting started guide](/docs/getting-started-guides/helloworld/).

## What can I do with Pacificsoft?

Pacificsoft provides out-of-the-box IoT solution that will enable server-side infrastructure for your IoT applications.
You can find more information by browsing [guides](/docs/user-guide/) and [samples](/docs/samples/)

## Where can I host Pacificsoft?

You can host Pacificsoft in the cloud, on-premises or locally on your laptop, PC or even Raspberry Pi. We recommend to get started with Docker installation
  
  - [Linux & Mac OS](/docs/user-guide/install/docker/) 
  - [Windows](/docs/user-guide/install/docker-windows/)

You can also take a look at [cluster setup](/docs/user-guide/install/cluster-setup/) guide.

## How to connect my device?

Pacificsoft provides
[MQTT](/docs/reference/mqtt-api), 
[CoAP](/docs/reference/coap-api) and 
[HTTP](/docs/reference/http-api) protocols support.
**Existing** devices may be connected to the platform using **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**.
You can find more information on the [connectivity](/docs/reference/protocols/) page. 

## Do I need to use an SDK?

No, many IoT devices can't afford to embed third-party SDK. Pacificsoft provides quite simple API over common IoT protocols. You can choose any client-side library you like or use your own.
Some useful references:
 
 - [MQTT client-side libraries list](https://github.com/mqtt/mqtt.github.io/wiki/libraries) 
 - [C-implementation for CoAP](https://libcoap.net/)

## What about security?

You can use MQTT (over SSL) or HTTPS protocols for transport encryption. 

Each device has unique access token credentials that is used to setup connection. Credentials type is pluggable, so X.509 certificates support is coming soon.

## How much devices can Pacificsoft support?

Pacificsoft platform is horizontally scalable. Each server node in the cluster is unique.
Scalability is achieved using [consistent-hashing](https://dzone.com/articles/simple-magic-consistent) load balancing algorithm between the cluster nodes.
Actual performance depends on usage scenario of connected devices. 
For example, small commodity hardware cluster can support [several millions](/docs/reference/performance/) of devices connected over MQTT. 
  
## Where does Pacificsoft store data?

The data is stored in [Cassandra](http://cassandra.apache.org/) database. Cassandra suites well for storage and querying of time-series data and provides high availability and fault-tolerance.
 
## What license type does Pacificsoft use?

Pacificsoft is licensed under [Apache 2.0 License](https://en.wikipedia.org/wiki/Apache_License#Version_2.0).
It is free for both personal and commercial usage and you can deploy it anywhere.

## How to get support?

You can use troubleshooting instructions and community resources or [contact us](/docs/contact-us) and learn more about [services](/docs/services/) we provide.
