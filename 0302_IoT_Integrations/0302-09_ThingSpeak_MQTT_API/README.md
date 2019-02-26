ThingSpeak MQTT API example
==========================

The source files located in this folder illustrate the use of MQTT driver with 
MqttPublish and MqttSubscribe function blocks.

The example consists of a publisher and a subscriber application, which both use 
the ThingSpeak MQTT broker at mqtt.thingspeak.com. The publisher is configured 
to publish data to a desired channel and the subscriber is configured to listen 
to the changes on the desired channel.

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.
- You must register at ThingSpeak (free) and create a private channel in order 
to get unique API keys.

## Running the example - publisher ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Open the configuration of the block *MQTT__MqttPublish* and set the topic to 
"channels/<channelID\>/publish/<WriteAPIKey\>". Replace <channelID\> with the 
ID of the desired channel and <WriteAPIKey\> with the key coresponding to 
this channel.
- Compile and download it to the target device.
- Set the BSTATE parameter of the MP_TRIGGER_PUBLISH block to ON and check https://thingspeak.com/channels/\<channelID\> to see the published data.

## Running the example - subscriber ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Open the MQTT driver configuration and press "Configure". In the configuration dialog set the username (can be anything) and the password to <MQTTAPIKey\> which can be obtained from [https://thingspeak.com/account/profile](https://thingspeak.com/account/profile).
- Open the configuration of the block *MQTT__MqttSubscribe* and set the topic to 
 "channels/<channelID\>/subscribe/json/<ReadAPIKey\>". Replace <channelID\> with the ID of the desired channel and <ReadAPIKey\> with the key coresponding to this channel.
- Compile and download it to the target device.
- Message received by the block *MQTT__MqttSubscribe* is then parsed by the PJSOCT block. Compare the output of this block with the values at https://thingspeak.com/channels/\<channelID\>.

## Note ##
It is highly recommended to set *Client id* to a unique value in the MQTT driver configuration for both the Publisher and the Subscriber.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [ThingSpeak MQTT API documentation](https://www.mathworks.com/help/thingspeak/mqtt-api.html)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced
automation and control solutions using REXYGEN.