MQTT data exchange
==============================================

This folder contains the source files for the demonstration project on data
exchange between two devices over the MQTT protocol.

Both the publisher and subscriber stations are implemented in REXYGEN
but any of them can be replaced by another device supporting the MQTT protocol.

## Prerequisites ##
- *REXYGEN Runtime Core* and MQTTDrv modules must be installed and running on the individual 
devices to run the examples.

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Publisher station continuously publishes samples from a signal generator (SG function block) to a MQTT topic (*rexygen/example-topic*).
Signal generator is configured to generate sine signal.
- Subscriber station subscribes to the same MQTT topic.
- Both publisher and subscriber use a publicly available broker (*test.mosquitto.org*).
- To observe the algorithms in real-time switch to **Watch mode** and double-click on block TRND.
The first signal in block TRND in task *publisher_task* displays values being send to the broker.
The first signal in block TRND in task *subscriber_task* displays values being received from the broker.

### Changing the driver configuration and adding more signals ###
To change the broker and more go to MQTT driver configuration (MQTT block both in the publisher and in the subscriber) and press "Configure". To add more signals create new instances of the blocks *MQTT_Publish* and *MQTT_Subscribe* with coresponding topic. Make sure to read the MQTT driver documentation (see below).

## Note ##
It is highly recommended to set *Client id* to a unique value in the  MQTT driver configuration both for publisher and subscriber.

## Documentation ##

- [MQTTDrv - MQTT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MQTTDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.