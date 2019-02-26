ThingSpeak API example
======================

The source files located in this folder illustrate the use of a HTTP function 
block.

The HTTP block is set up to send data to ThingSpeak channel via ThingSpeak API. 
ThingSpeak channel can be used to visualize your data and access it from remote 
computers / devices.

## Note ##
This example can be easily modified to any other similar API which is using JSON 
formatting.

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 s

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.
- You must register at ThingSpeak (free) and create a private channel in order 
to get unique API keys.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Specify your unique ThingSpeak Write API key for the desired channel into 
CNS_APIkey:scv. It will concatenate together with the "url" parameter of the 
HTTP block to form the whole GET request (https://api.thingspeak.com/update.json?api_key=your_API_key)
- Compile and download it to the target device.
- Set the BSTATE parameter of the MP_TRIGGER_POST block to ON and check 
https://thingspeak.com/channels/your_channel_ID to see the posted data.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [ThingSpeak API documentation](https://www.mathworks.com/help/thingspeak/api-reference.html)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.