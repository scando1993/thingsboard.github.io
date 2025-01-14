---
layout: docwithnav
title: Platform Integrations
description: Platform Integrations Documentation 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Overview

Pacificsoft Platform integrations feature was designed for two primary use cases / deployment options:

  - Connect existing NB IoT, LoRaWAN, SigFox and other devices with specific payload formats directly to Pacificsoft platform.
  - Stream data from devices connected to existing IoT Platforms to enable real-time interactive dashboards and efficient data processing.
  
Both use cases have few things in common. There is a server-side component in the deployment topology that prevents direct access to device and provides set of APIs to interact with the device in the field instead.
The payload format of the device is not well defined. Often two devices that have similar sensors have different payload formats depending on a vendor or even software version.  

The job of Pacificsoft Integration is to provide secure and reliable API bridge between core platform features (telemetry collection, attributes and RPC calls) and specific third-party platform APIs.    

### How it works?

At the moment Pacificsoft supports two main integration protocols: HTTP and MQTT. 
For example, SigFox Backend uses HTTP to push data to Pacificsoft or any other system. 
On the other hand, AWS IoT, IBM Watson and Azure Event Hub allows to subscribe to the data feed from devices via MQTT. Similar, some LoRaWAN and NB IoT platforms allow both HTTP and MQTT interfaces.

Once message arrives from External Platform to Pacificsoft it passes validation according to platform specific payload format and security rules. 
Once message is validated Pacificsoft Integration invokes assigned [**Uplink Data Converter**](/docs/user-guide/integrations/#uplink-data-converter) to extract sub-set of meaningful information out of the incoming message. 
The message is basically transformed from device and platform specific payload to the format that Pacificsoft uses.

Since TB PE v2.0, Rule Engine is also able to push Downlink messages to the integrations. The example of such message may be:
 
 - notification about [shared attribute](/docs/user-guide/attributes/#device-specific-attribute-types) (configuration) update;
 - notification about [oneway RPC call](/docs/user-guide/rpc/#server-side-rpc-api) to trigger some action on the device;
 - any custom message from the rule engine.
 
The most common use cases are:
 
 - changing data upload frequency based on shared attribute value change
 - triggering firmware update procedure based on shared attribute value change
 - changing device state based on rpc call;    
 
Once message is pushed by the rule engine, Pacificsoft invokes assigned [**Downlink Data Converter**](/docs/user-guide/integrations/#downlink-data-converter) and transforms the rule engine message to the specific data format that is used by the Integration.  

<br/>

 ![image](/images/user-guide/integrations/integrations-overview.svg)

### Data Converters

Data Converters is a part of the Platform Integrations feature. There are Uplink and Downlink data converters.
 
#### Uplink Data Converter

The main function of Uplink Data Converter is to parse payload of the incoming message and transform it to format that Pacificsoft uses.
  
Uplink Converter is basically a user defined function with the following signature:

```javascript
function Decoder(payload, metadata);
```

##### Payload

Payload is one of the following content types: JSON, TEXT, Binary(Base64) and is specific to your Integration type.

Default Uplink Converter is dummy, but contains few helper functions to transform incoming payload:

```javascript
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);
   // parse string to JSON
   return JSON.parse(str);
}
```

There are also **btoa** and **atob** functions available to decode Binary(Base64) payload.  

##### Metadata

Metadata is a key-value map with some integration specific fields. You can configure additional metadata for each integration in the integration details.
For example, you can put device type as an additional Integration metadata parameter and use it to automatically assign corresponding device type to new devices.

##### Converter output
 
Converter output should be a valid JSON document with the following structure:

```json
{
    "deviceName": "Device A",
    "deviceType": "thermostat",
    "attributes": {
        "model": "Model A",
        "serialNumber": "SN-111",
        "integrationName": "Test integration"
    },
    "telemetry": {
        "temperature": 42,
        "humidity": 80
    }
}
```

**NOTE**: The only mandatory parameters in the output JSON are **deviceName** and **deviceType**.

Converter may also output array of device values and/or contain timestamps in the telemetry values. For example:

```json
[
    {
        "deviceName":"SN-111",
        "deviceType":"thermostat",
        "attributes":{
            "model":"Model A"
        },
        "telemetry":[
            {
                "ts":1527863043000,
                "values":{
                    "battery":3.99,
                    "temperature":27.05
                }
            },
            {
                "ts":1527863044000,
                "values":{
                    "battery":3.98,
                    "temperature":27.06
                }
            }
        ]
    },
    {
        "deviceName":"SN-333",
        "deviceType":"thermostat",
        "attributes":{
            "model":"Model A"
        },
        "telemetry":{
            "ts":1527863041000,
            "values":{
                "battery":3.99,
                "temperature":27.05
            }
        }
    }
]
```
 
##### Example

Let's assume a complex example where payload is encoded in hex "value" field and there is a timestamp associated with each record. 
First two bytes of "value" field contain battery and second two bytes contain temperature. See payload example and metadata on a screen shoot below:

![image](/images/user-guide/integrations/uplink-converter-example.png) 


The full source code of javascript function used in converter is available [**here**](/docs/user-guide/resources/uplink-data-converter-example.js). 

See video tutorial below for step-by-step instruction how to setup Uplink Data Converter.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/CojStpYCTGI" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 

#### Downlink Data Converter
 
The main function of Downlink Data Converter is to transform the incoming rule engine message and its metadata 
to the format that is used by corresponding Integration. 

Downlink Converter is basically a user defined function with the following signature:

```javascript
function Decoder(msg, metadata, msgType, integrationMetadata);
```

Where

 - **msg** - JSON with rule engine msg
 - **metadata** - list of key-value pairs with additional data about the message (produced by the rule engine)
 - **msgType** - Rule Engine message type. See [predefined message types](/docs/user-guide/rule-engine-2-0/overview/#predefined-message-types) for more details.
 - **integrationMetadata** - key-value map with some integration specific fields. You can configure additional metadata for each integration in the integration details.
  
##### Converter output

Converter output should be a valid JSON document with the following structure:

```json
{
    "contentType": "JSON",
    "data": "{\"tempFreq\":60,\"firmwareVersion\":\"1.2.3\"}",
    "metadata": {
        "topic": "temp-sensor/sensorA/upload"
    }
}
```

Where 

 - **contentType** - JSON, TEXT or BINARY (Base64 string) and is specific to your Integration type.
 - **data** - data string according to the content type
 - **metadata** - list of key-value pairs with additional data about the message. For example, topic to use for MQTT integration, etc.

##### Example

Let's assume an example where temperature and humidity upload frequency attributes are updated via Pacificsoft REST API and 
you would like to push this update to an external MQTT broker (TTN, Mosquitto, AWS IoT, etc). 
You may also want to include the "firmwareVersion" attribute value that was configured long time ago and is not present in this particular request.
The topic to push the update should contain the device name.

![image](/images/user-guide/integrations/downlink-converter-example.png) 


The full source code of javascript function used in converter is available [**here**](/docs/user-guide/resources/downlink-data-converter-example.js). 

In order to invoke the downlink processing by the integration, tenant administrator should configure the rule chain similar to the one below:

![image](/images/user-guide/integrations/downlink-rule-chain-example.png)

The full rule chain configuration is available [**here**](/docs/user-guide/resources/downlink_example_rule_chain.json).

##### Synchronous vs Asynchronous Downlinks 

Most of the integrations are able to process downlink messages to devices asynchronously. 
For example, each message pushed by the rule engine to MQTT based integration is immediately pushed to the corresponding external MQTT broker.

However, some integrations, like SigFox or generic HTTP integration are not able to push message asynchroniously. 
These integrations, due to the nature of underlying HTTP protocol, are only able to push downlink information synchronously in reply to uplink message request. 
In this case, the last downlink message originated by rule engine will be stored in the queue until the new uplink message arrives for particular device.


### Debug mode

This feature allows to persis: 

  - incoming messages from thirdparty system;
  - metadata values;
  - the results of data converter;
  - results of the payload processing. 
  
It enables rapid development of converters and configuration of integrations. 
This feature allows to validate your configuration setup and should be used only for debug purposes, since it dramatically impacts performance.

### Platform Integrations vs IoT Gateway

Experienced Pacificsoft users may notice that functionality of Integrations feature partially overlap with functionality of [IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/).
However, there are key differences between these two systems/features:

  - IoT Gateway is designed for local network deployments, Integrations are designed for server-to-server integrations.
  - IoT Gateway is designed to support < 1000 devices, while Integrations are designed for high throughput, scalability and cluster deployments as part of Pacificsoft server.
  - Gateway recompilation and restart is required to add custom payload decoder while Integration Converter is a JS function that may be modified in real time. 
  
As you can see, both systems are important and applicable in different use cases.

### Feature Roadmap

#### Usage statistics
 
We plan to log statistics for amount of messages processed by each integration with possible limitations of messages processed on a tenant / system levels.

#### More integrations and protocols

We plan to provide specific integrations for different platforms, and also for different communication protocols, like gRPC.

#### More data converters

We plan to collect and maintain data converters for most popular devices on the market to simplify integration path even more. 
Please note that you can share your converters with community and send them to us to make part of official Pacificsoft distributive.   

[Contact us](/docs/contact-us/) to suggest missing feature for your use case.

### See Also

Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/user-guide/integrations/http/)
 - [MQTT](/docs/user-guide/integrations/mqtt/)
 - [AWS IoT](/docs/user-guide/integrations/aws-iot/)
 - [IBM Watson IoT](/docs/user-guide/integrations/ibm-watson-iot/)
 - [Azure Event Hub](/docs/user-guide/integrations/azure-event-hub/)
 - [Actility ThingPark](/docs/user-guide/integrations/thingpark/)
 - [SigFox](/docs/user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/user-guide/integrations/ocean-connect/)
 - [TheThingsNetwork](/docs/user-guide/integrations/ttn/)
 - [OPC-UA](/docs/user-guide/integrations/opc-ua/)


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}




