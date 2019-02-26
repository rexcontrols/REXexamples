ESP8266 REST API example
========================

The source files located in this folder illustrate how to inject data into a
running algorithm using REST API of REXYGEN Runtime Core via WiFi operated ESP8266.

There are individual HTTP POST and HTTP GET requests for writing/reading data of all
common types: double, long, Boolean and string.  

## Timing of the project ##
The REX algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.
- The target device is assumed to have IP address 192.168.1.100.
- User *admin* and password *mypassword* is assumed on the target device. Can be specified in sketch. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Compile and download it to the target device.
- Switch to *Watch mode* and observe the displayed values.
- Upload the sketch to ESP8266 enabled device using Arduino IDE. The values in REXYGEN algorithm will be 
overwritten by the values defined in the script.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.