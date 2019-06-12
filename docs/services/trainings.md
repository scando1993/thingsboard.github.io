---
layout: docwithnav
title: Training sessions
description: Pacificsoft training sessions

---

Pacificsoft training sessions are educational events that are delivered to your company’s engineers by Pacificsoft core team members. The primary goals of Pacificsoft education courses are:

- Boosting your experience with the Pacificsoft platform.
- Familiarizing you with platform features, APIs and integrations.
- Addressing practical questions related to your use cases.
- Minimizing time-to-market for your IoT product or solution.

Pacificsoft training sessions are on-demand online events for up to 8 people. On-site training sessions are also available. [Contact us](/docs/contact-us/) for more details.

<br/>

<span class="heading">Training courses</span>

* TOC
{:toc}

### Pacificsoft Basics

Learn how Pacificsoft platform helps businesses to implement IoT use cases and support IoT solutions.

This training session will provide you with the basic understanding of Pacificsoft features and how they can be used in your IoT product.

**Agenda:**

- Platform overview
    - Explain platform capabilities and functionality. 
    - Discussion on your use case to highlight key points during the training session.
- Platform installation
    - Review available installation options. Highlight security and configuration aspects.
    - **Exercise:** setup Pacificsoft instance on AWS.
- Web UI
    - Explain basic web UI capabilities and main entities: Devices, Customers, Users, Dashboards.
    - Review available widget types and explain their basic configuration parameters.
    - Explain Pacificsoft user roles and their permissions.
    - **Exercise:** create Device and provision Device Credentials
    - **Exercise:** create Dashboard and assign it to the Customer.
- Pacificsoft API
    - Explain Pacificsoft API for device connectivity and integration with server-side applications.
    - **Exercise:** create device firmware to publish telemetry and attributes over MQTT.
    - **Exercise:** add widgets to the Dashboard to visualize data from the previous exercise.
- Rule Engine
    - Explain Rule engine data flow.
    - Review Rule components: messages, relations, nodes and their available implementations.
    - **Exercise:** configure alerting rule based on device attributes and timeseries values.
- Use-cases and Q&A session

<table class="trainings-info">
    <tr>
        <td>Length</td>
        <td colspan="2">8 hours ( 1 full work day or two 4-hour sessions)</td>
    </tr>
    <tr>
        <td>Audience</td>
        <td colspan="2">software and hardware engineers, architects</td>
    </tr>
    <tr>
        <td>Prerequisite Knowledge</td>
        <td colspan="2">basic understanding of IoT and programming concepts</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2"><a href="/docs/contact-us/" class="button accent">Contact us</a></td>
    </tr>
</table>

### Pacificsoft Data Visualization

Learn how Pacificsoft platform helps to collect and visualize IoT data and use this knowledge to improve customer experience.

This training session will provide you with the in-depth understanding of Pacificsoft visualization capabilities, widget customization, user roles, and permissions.


**Agenda:**

- Web UI
    - Explain web UI capabilities and main business entities: Devices, Customers, Users, and Dashboards.
    - Explain Pacificsoft user roles and their permissions.
    - **Exercise:** create Device and provision Device Credentials
- Dashboards
    - Explain Dashboard features and capabilities
    - **Exercise:** create Dashboard and assign it to Customer.
    - **Exercise:** modify dashboard settings: background color, image, margins.
    - **Exercise:** working with device aliases.
    - **Exercise:** import/export your dashboard.
- Widgets
    - Explain widget types, data sources, basic and advanced settings.
    - **Exercise:** configure and tune widget to show simulated device values.
    - **Exercise:** configure and tune widget to show real device values.
    - **Exercise:** configure and tune card widgets.
    - **Exercise:** configure and tune gauge widgets.
    - **Exercise:** configure and tune line chart widgets.
    - **Exercise:** configure and tune map widgets.
- Real-time and historical data visualization
    - Configure line chart widget to show historical data
    - Configure line chart widget to show real-time data with time-window.
- Custom widgets
    - Explain widget library functionality
    - **Exercise:** Customize widget look and feel
    - **Exercise:** Customize widget logic

<table class="trainings-info">
    <tr>
        <td>Length</td>
        <td colspan="2">8 hours ( 1 full work day or two 4-hour sessions)</td>
    </tr>
    <tr>
        <td>Audience</td>
        <td colspan="2">front-end developers, engineers, architects</td>
    </tr>
    <tr>
        <td>Prerequisite Knowledge</td>
        <td colspan="2">basic concepts of Pacificsoft platform</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2"><a href="/docs/contact-us/" class="button accent">Contact us</a></td>
    </tr>
</table>

### Device connectivity and application development using Pacificsoft

Learn how to use Pacificsoft platform APIs to build connected applications for your IoT devices.

This training session will provide you with the in-depth understanding of supported network protocols and device APIs.


**Agenda:**

- Platform overview
    - Explain platform capabilities and functionality. 
    - Discussion on your use case to highlight key points during the training session.
- Device connectivity options
    - Review of supported network protocols: MQTT, HTTP and CoAP.
    - **Exercise:** telemetry data upload using MQTT
    - **Exercise:** telemetry data upload using HTTP
    - **Exercise:** telemetry data upload using CoAP
- Attributes API 
    - Use cases and feature overview
    - **Exercise:** Reporting device attribute changes to Pacificsoft
    - **Exercise:** Subscribe to server-side attribute updates
    - **Exercise:** Save and restore application state using Pacificsoft server.
- Timeseries API
    - Use cases and feature overview
    - **Exercise:** Reporting time-series data to Pacificsoft
- RPC API	
    - Use cases and feature overview
    - **Exercise:** Send one-way RPC command to Device
    - **Exercise:** Send two-way RPC command to Device
    - **Exercise:** Send RPC command from Device to Server
- Messaging between Devices
    - Messaging rule nodes overview
    - **Exercise:** Send message from one device application to another
- Load Balancing, Scalability, and Failover
    - Use cases and platform capabilities overview


<table class="trainings-info">
    <tr>
        <td>Length</td>
        <td colspan="2">8 hours ( 1 full work day or two 4-hour sessions)</td>
    </tr>
    <tr>
        <td>Audience</td>
        <td colspan="2">developers, engineers, architects</td>
    </tr>
    <tr>
        <td>Prerequisite Knowledge</td>
        <td colspan="2">basic concepts of Pacificsoft platform</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2"><a href="/docs/contact-us/" class="button accent">Contact us</a></td>
    </tr>
</table>

### Server-side application development using Pacificsoft API

Learn how to connect your cloud applications with your IoT devices using Pacificsoft platform APIs.

This training session will provide you with in-depth understanding platform REST and websocket APIs, rule engine, data collection and analytics use cases.

**Agenda:**

- Platform overview
    - Explain platform capabilities and functionality. 
    - Discussion on your use case to highlight key points during the training session.
- Platform API
    - REST API overview
    - **Exercise:** Create tenant, device and customer using REST API
    - **Exercise:** Create dashboard and assign it to user using REST API
    - **Exercise:** Send RPC command to device using REST API
    - **Exercise:** Fetch device data using REST API
    - **Exercise:** Update device attribute using REST API
    - **Exercise:** Subscribe to device data feed using websocket
- Rule engine
    - Explain Rule engine data flow.
    - Review Rule components: filters, processors and actions and their available implementations.
    - Explain available rule nodes and their implementations.
- Data collection and analytics
    - Use cases and data flow overview
    - **Exercise:** Pushing telemetry and attributes data to Kafka
    - **Exercise:** Pushing telemetry and attributes data to RabbitMQ
    - **Exercise:** Pushing telemetry and attributes data to REST API
- RPC API	
    - Use cases and feature overview
    - **Exercise:** Send one-way RPC command to Device
    - **Exercise:** Send two-way RPC command to Device
- Load Balancing, Scalability and Failover
    - Use cases and platform capabilities overview

<table class="trainings-info">
    <tr>
        <td>Length</td>
        <td colspan="2">8 hours ( 1 full work day or two 4-hour sessions)</td>
    </tr>
    <tr>
        <td>Audience</td>
        <td colspan="2">developers, engineers, analysts and architects</td>
    </tr>
    <tr>
        <td>Prerequisite Knowledge</td>
        <td colspan="2">basic concepts of Pacificsoft platform</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2"><a href="/docs/contact-us/" class="button accent">Contact us</a></td>
    </tr>
</table>

### Pacificsoft Administration

Learn how to provision, monitor and scale your Pacificsoft cluster.

This training session will provide you with in-depth understanding platform configuration, troubleshooting and scalability. We will also cover security and load balancing topics.


**Agenda:**

- Platform overview
    - Explain platform capabilities and functionality. 
    - Discussion on your use case to highlight key points during the training session.
- Single-node platform installation
    - Explain installation options. Highlight security and configuration aspects.
    - **Exercise:** setup Pacificsoft instance on AWS using public AMIs.
    - **Exercise:** setup Pacificsoft instance on CentOS.
- Pacificsoft configuration
    - Explain main configuration files
    - **Exercise:** general system configuration
- Pacificsoft troubleshooting
    - Review log files and their configuration
    - **Exercise:** changing log levels for particular components
- Pacificsoft cluster installation
    - Explain cluster deployment options and configuration
    - **Exercise:** Pacificsoft cluster setup
    - **Exercise:** Pacificsoft cluster setup troubleshooting
- Load Balancing, Scalability, and Failover
    - Use cases and platform capabilities overview
    - Pacificsoft architecture overview
    - **Exercise:** Tuning cluster performance
    - **Exercise:** Scaling Pacificsoft cluster
    - **Exercise:** Replacing Failed node
    - **Exercise:** Load balancing device connections
    - **Exercise:** Load balancing server-side API calls
- Security
    - Use cases and security options overview
    - **Exercise:** Securing MQTT API calls using SSL and X.509 certificates
    - **Exercise:** Securing HTTP API calls using SSL

<table class="trainings-info">
    <tr>
        <td>Length</td>
        <td colspan="2">8 hours ( 1 full work day or two 4-hour sessions)</td>
    </tr>
    <tr>
        <td>Audience</td>
        <td colspan="2">system administrators and architects</td>
    </tr>
    <tr>
        <td>Prerequisite Knowledge</td>
        <td colspan="2">basic understanding of IoT and system administration</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2"><a href="/docs/contact-us/" class="button accent">Contact us</a></td>
    </tr>
</table>
