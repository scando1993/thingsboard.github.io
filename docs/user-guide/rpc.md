---
layout: docwithnav
assignees:
- ashvayka
title: Using RPC capabilities
description: Remote control of IoT devices from the Pacificsoft IoT cloud using RPC feature

---

* TOC
{:toc}

Pacificsoft allows you to send remote procedure calls (RPC) from server side applications to devices and vice versa.
Basically, this feature allows you to send commands to devices and receive results of commands execution. 
Similar, you can execute request from the device, apply some calculations or other server-side logic on the back-end and push the response back to the device.
This guide covers Pacificsoft RPC capabilities. After reading this guide, you will get familiar with following topics:

- RPC call types
- Basic RPC use-cases
- RPC client-side and server-side APIs
- RPC widgets

## RPC call types

Thinsboard RPC feature can be divided into two types based on originator: device-originated and server-originated RPC calls.
In order to use more familiar names, we will name device-originated RPC calls as a **client-side** RPC calls 
and server-originated RPC calls as **server-side** RPC calls.
  
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/client-side-rpc.svg)
   {: refdef}  

Server-side RPC calls can be divided into one-way and two-way:
 
 - One-way RPC request is sent to the device without delivery confirmation and obviously, does not provide any response from the device. 
   RPC call may fail only if there is no active connection with the target device within a configurable timeout period.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/one-way-rpc.svg)
   {: refdef}
   
 - Two-way RPC request is sent to the device and expects to receive a response from the device within the certain timeout. 
   The Server-side request is blocked until the target device replies to the request.

   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/two-way-rpc.svg)
   {: refdef}


## Device RPC API

Pacificsoft provides convenient API to send and receive RPC commands from applications running on the device.
This API is specific for each supported network protocol.
You can review API and examples in corresponding reference page:

 - [MQTT RPC API reference](/docs/reference/mqtt-api/#rpc-api)
 - [CoAP RPC API reference](/docs/reference/coap-api/#rpc-api)
 - [HTTP RPC API reference](/docs/reference/http-api/#rpc-api) 

## Server-side RPC API

Pacificsoft provides **System RPC Service** that allows you to send RPC calls from server-side applications to the device.
In order to send RPC request you need execute HTTP POST request to the following URL:

```shell
http(s)://host:port/api/plugins/rpc/{callType}/{deviceId}
```

where 

 - **callType** is either **oneway** or **twoway**
 - **deviceId** is your target [device id](/docs/user-guide/ui/devices/#get-device-id)

The request body should be a valid json object with two elements: 
 
 - **method** - method name, json string
 - **params** - method parameters, json object

For example:

{% capture tabspec %}mqtt-rpc-from-client
A,set-gpio-request.sh,shell,resources/set-gpio-request.sh,/docs/user-guide/resources/set-gpio-request.sh
B,set-gpio-request.json,json,resources/set-gpio-request.json,/docs/user-guide/resources/set-gpio-request.json{% endcapture %}  
{% include tabs.html %}

Please **note** that in order to execute this request, you will need to substitute **$JWT_TOKEN** with a valid JWT token.
This token should belong to either 

 - user with **TENANT_ADMIN** role
 - user with **CUSTOMER_USER** role that owns the device identified by **$DEVICE_ID**
 
You can use following [guide](/docs/reference/rest-api/#rest-api-auth) to get the token.

## RPC Rule Nodes
It is possible to integrate RPC actions into processing workflow. There are 2 Rule Nodes for working with RPC requests. 

-  [RPC reply](/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-reply-node) 
-  [RPC request](/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node) 

## RPC widgets

See [widgets library](/docs/user-guide/ui/widget-library/#gpio-widgets) for more details.