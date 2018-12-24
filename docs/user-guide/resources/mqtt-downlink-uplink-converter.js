{
  "name": "Sensor Uplink Converter",
  "type": "UPLINK",
  "debugMode": true,
  "configuration": {
    "decoder": "// decode payload to string\n//var payloadStr = decodeToString(payload);\nvar payloadJson = decodeToJson(payload);\n\nvar result = {\n    attributes: {\n        integrationName: metadata.integrationName,\n        deviceName: payloadJson.deviceName,\n        deviceType: payloadJson.deviceType,\n    },\n    deviceName: payloadJson.deviceName,\n    deviceType: payloadJson.deviceType,\n    telemetry: []\n};\nvar telemetryObj = {\n    ts: payloadJson.timestamp,\n    values: {}\n};\n\ntelemetryObj.values.temperature = payloadJson.temperature;\nresult.telemetry.push(telemetryObj);\n\n/** Helper functions **/\n\nfunction decodeToString(payload) {\n    return String.fromCharCode.apply(String, payload);\n}\n\nfunction decodeToJson(payload) {\n    var str = decodeToString(payload);\n    var data = JSON.parse(str);\n    return data;\n}\n\nreturn result;"
  },
  "additionalInfo": null
}