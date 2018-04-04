Pool automation with web-based graphical HMI 
============================================

This folder contains the source files for the demonstration project on pool 
automation using REXYGEN and the Raspberry Pi minicomputer.

A single push-button connected to GPIO#22 can be used for controlling 
the pool. In automatic mode the lights and filtration pump are switched on at 
predefined time of day. Long press of the button switches the control algorithm 
to manual mode. In manual mode the user can control the lights (single push) and 
filtration pump (double push).

## Prerequisites ##

- *REXYGEN Runtime Core* and RPiDrv modules must be installed and running on the Raspberry Pi.
- The wiring must comply with the attached schematics. 

## Running the example ##

- The **exec.mdl* file is the project main file, open it with *REXYGEN Studio*.
- Compile and download the project to the target device.

## User interface (HMI) ##
The example is accompanied by a graphical user interface generated from *REXYGEN HMI Designer*. See the above mentioned tutorial for instructions on 
deploying the HMI on the Raspberry Pi.
 
## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Raspberry Pi](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_RasPi_ENG.pdf)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
