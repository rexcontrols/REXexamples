ThingSpeak API example
======================

The source files located int this folder illustrate the use of a HTTP function block.

Block HTTP is set up to send data to ThingSpeak channel via ThingSpeak API. ThingSpeak
channel can be used to visualize your data and access it from remote computers / devices.

## Note ##
This example can be easily modified to any other similar API which is using JSON formatting.

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 s

## Prerequisites ##
- RexCore must be installed and running on the target device.
- Registration (free) at ThingSpeak in order to get unique API key

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify your unique ThingSpeak API key into CNS_APIkey:scv. It will concatenate together with 
  parameter "url" of "HTTP" block whole GET request (https://api.thingspeak.com/update.json?api_key=your_API_key)
- Change the target device parameter in "EXEC" block according to your HW. PC-Windows is default.
- Compile and download it to the target device.
- Change CNB_TRIGGER_POST to ON and check https://thingspeak.com/channels/your_channel_ID to
see the posted data.

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [ThingSpeak API documentation](https://www.mathworks.com/help/thingspeak/api-reference.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.