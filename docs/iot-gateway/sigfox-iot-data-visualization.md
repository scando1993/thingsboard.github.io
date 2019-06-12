---
layout: docwithnav
title: SigFox IoT data collection and visualization
description: SigFox IoT data collection and visualization using Pacificsoft IoT Gateway

---

* TOC
{:toc}

### Overview

![Sigfox gateway integration](/images/gateway/sigfox/sigfox-gateway-integration.svg)

Sigfox is low-cost, low energy consumption connectivity solution that allows collecting a relatively small amount of data from your IoT devices.
Sigfox Backend allows provisioning custom callbacks and pushing data to your server applications. We will use this feature to push data to Pacificsoft IoT Gateway.
The Gateway will take care of routing tasks: convert data to unified format, device provisioning, data delivery, etc.
Once data is delivered to Pacificsoft we will be able to see it on advanced real-time IoT dashboards and share these IoT dashboards with end-users.
 
### Prerequisites 

 - **Pacificsoft**. We assume you already have access to Pacificsoft instance.
You can use either our [**live demo**](/docs/user-guide/live-demo/) server or install your own Pacificsoft instance using one of the [**installation options**](/docs/user-guide/install/installation-options/).

 - **Pacificsoft IoT Gateway**. We also assume you already installed Pacificsoft IoT Gateway using one of the [**installation options**](/docs/iot-gateway/installation/) and [**provisioned**](/docs/iot-gateway/getting-started/#step-3-gateway-provisioning) it within your Pacificsoft instance.
  
 - **Sigfox**. We also expect you have your Sigfox devices registered in Sigfox Backend.
 
**NOTE**: Both Pacificsoft and Pacificsoft IoT Gateway need to be installed in the cloud to be accessible by Sigfox Gateway.

### Sigfox configuration steps

#### Step 1. Configure UPLINK callback

Let's assume we want to publish coordinates, temperature and humidity data from your Sigfox module to Pacificsoft.
In order to achieve this, you will need to select device type and configure custom callback from Sigfox Backend to our IoT Gateway.

{:refdef: style="text-align: center;"}
![image](/images/gateway/sigfox/4.sigfox_device_type_callback_configuration.jpg)
{: refdef}

Few things to notice:

 - This is **UPLINK** data callback;
 - **URL pattern** contains IoT Gateway host, port and device type id;
 - **Authorization** header is used to authenticate Sigfox server;
 - **POST** HTTP method is required;
 - Message body is a **valid** JSON document;
 - Message body uses **regular variables**: device, lat, lng;
 - Message body uses **custom variables** which are case sensitive: Temperature and Humidity.

Once again, we assume you have deployed the gateway on some cloud server to get the static IP address or hostname.

### Pacificsoft IoT Gateway configuration steps

#### Step 2. Enable Sigfox extension

Navigate to gateway configuration folder and edit **tb-gateway.yml** file.
Configuration folder location:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

Change **sigfox.enabled** property value to **true**.

#### Step 3. Configure Sigfox extension

The **sigfox-config.json** contains configuration that allows mapping of JSON messages from Sigfox Backend to Pacificsoft telemetry.
The default mapping listed below will allow to convert data from Sigfox Backend and publish it to Pacificsoft.
 
```json
{
  "deviceTypeConfigurations": [
    {
      "deviceTypeId": "YOUR_DEVICE_TYPE_ID",
      "token": "SECURITY_TOKEN",
      "converter": {
        "deviceNameJsonExpression": "${$.device}",
        "attributes": [
          {
            "type": "string",
            "key": "lat",
            "value": "${$.lat}"
          },
          {
            "type": "string",
            "key": "lng",
            "value": "${$.lng}"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${$.data.temperature}",
            "transformer": {
              "type": "intToDouble"
            }
          },
          {
            "type": "double",
            "key": "humidity",
            "value": "${$.data.humidity}",
            "transformer": {
              "type": "intToDouble"
            }
          }
        ]
      }
    }
  ]
}
```

Few things to notice:

 - **YOUR_DEVICE_TYPE_ID** need to be replaced with the actual value ("58cb911a5005742b3b4c41a0" in our case)
 - **SECURITY_TOKEN** need to be replaced with the random value ("Basic U0lHRk9YX1RFU1RfVE9LRU4=" in our case)
 - **[JsonPath](https://github.com/jayway/JsonPath)** expression are used to extract values from incoming JSON ("$.data.temperature" in our case).
 - **All** JsonPath expressions need to be placed into **${}**.
 - **Transformers** are used to convert data types. For example, integer to double using "(65536-X)/10" formula. You can plugin your own converters.
 
See Sigfox extension [**configuration**](/docs/iot-gateway/sigfox/) for more details.

#### Step 4. Restart Pacificsoft Gateway

Restart your gateway using following commands

```bash
Windows: 
net stop tb-gateway
net start tb-gateway
Linux: 
sudo service tb-gateway restart
```

### Pacificsoft configuration steps

#### Step 5. Observe Sigfox devices

Once your Sigfox Backend callback is configured, you may observe incoming messages in Pacificsoft IoT Gateway logs.
If everything is configured correctly, you will see new devices in your Tenant Administrator device list.

{:refdef: style="text-align: center;"}
![image](/images/gateway/sigfox/devices.png)
{: refdef}

You are able to open a particular device and check that telemetry values arrived successfully.

#### Step 6. Provision Sigfox dashboard

Download the dashboard file using this [**link**](/docs/samples/sigfox/sigfox_dashboard.json). 
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your Pacificsoft instance.

**NOTE:** During import you will need to select a device that you want to visualize.

{:refdef: style="text-align: center;"}
![image](/images/gateway/sigfox/dashboard-import.png)
{: refdef}

Once imported, click on the dashboard card to see your device data:

{:refdef: style="text-align: center;"}
![image](/images/gateway/sigfox/dashboard-card.png)
{: refdef}





