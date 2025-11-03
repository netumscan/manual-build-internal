# Use MQTT protocol to transmit data


## Build Broker Server
- Use a server to build MQTT Broker, and the barcodes uploaded by the scanner are transferred through this server.

### Demo software
EMQX open source version, download address: [EMQX](https://github.com/emqx/emqx/releases)

### Testing Services

```{figure} ../../media/wifi-emqx.png
:align: center
```

```{note}
**Server Connection Information** 
- Host：mqtt.handy.pub
- Port：1883
- Username：netum
- Password：netum@2022
  
  For testing use only and strictly prohibited for use in production environments.
```

## Configure Scanner

### Configure WiFi and Broker
```{raw} html
    <iframe src="../../plugins/wifi-mqtt.html" height="900px" width="100%"></iframe>
```

```{note}
- The scanner connects to the MQTT Broker using port 1883 by default.
- The topic content subscribed by the scanner is the device ID.
```

### Modify the MQTT connection port
```{raw} html
    <iframe src="../../plugins/wifi-mqtt-ConnectPort.html" height="500px" width="100%"></iframe>
```

### Modify the scanner publishing topic
```{raw} html
    <iframe src="../../plugins/wifi-mqtt-PublishTopic.html" height="500px" width="100%"></iframe>
```

### Modify the scanner subscription topic
```{raw} html
    <iframe src="../../plugins/wifi-mqtt-SubscribeTopic.html" height="500px" width="100%"></iframe>
```

## Receiving Data

- Use the MQTT client software [[MQTTX](https://mqttx.app/)] to connect to the Broker server and subscribe to the topic where the scanner publishes messages.


```{figure} ../../media/wifi-mqttx.png
:align: center
```


## Development Reference
- [MQTT Client Library](https://www.emqx.com/zh/mqtt-client-sdk)
- [MQTT Tutorial(https://www.emqx.com/zh/mqtt-guide)
