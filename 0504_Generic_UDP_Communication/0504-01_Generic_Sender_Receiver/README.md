Data exchange via UDP 
=====================

This folder contains the source files for the demonstration project on data
exchange via UDP communication between two machines or computers.

Both the sender and receiver stations are implemented in REXYGEN
but any of them can be replaced by another device with UDP communication
capabilities. 

The Sender station transmits 4 signals of various types to the Receiver station. 
See the source **.c* files to understand how the data is processed and 
transmitted.

The received data is recorded in the TRND block which allows displaying of the 
trends (graphs) in the Watch mode of *REXYGEN Studio* or in the *REXYGEN Diagnostics* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target devices.

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Specify the IP addresses in the source **.c* files. The IP addresses are 
defined by hexadecimal numbers, e.g. 0xC0A80164 for 192.168.1.100.
- Compile and download it to the target devices.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the REXLANG block (Target->Watch Selection).
- Change the constants in the Sender station on-the-fly and check if it reaches 
the Receiver station.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [REXLANG function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/REXLANG.html)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.