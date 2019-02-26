Pushbullet API example
======================

The source files located in this folder illustrate the integration of REXYGEN System
with Pushbullet service.

The example shows how to send a push to all registered devices. 


## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 s

## Prerequisites ##
- *REXYGEN Runtime Core* and AdvBlk modules must be installed and running on the target device.
- Registration (free) at pushbullet.com.
- Create Access Token at pushbullet.com - https://docs.pushbullet.com/#api-quick-start

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Specify your Access Token in the HTTP2 function block parameter "user"
- Compile and download it to the target device.
- Change CNB_TRIGGER_PUSH to ON and wait for the notification on your registered devices.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [HTTP2 function block documentation] (https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/HTTP2.html)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)
- [Pushbullet API documentation](https://docs.pushbullet.com/#pushbullet-api)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.