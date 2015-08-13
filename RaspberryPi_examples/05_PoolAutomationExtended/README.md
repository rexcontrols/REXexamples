Pool automation with web-based graphical HMI 
============================================

This folder contains the source files for the demonstration project on pool 
automation using the REX Control System and the Raspberry Pi minicomputer .

This example is an extension of the original example related to the 
[tutorial on using the REX Control System](http://www.rexcontrols.com/articles/getting-started-with-rex-on-raspberry-pi)
on Raspberry Pi.

A single push-button connected to GPIO#22 can be used for controlling 
the pool. In automatic mode the lights and filtration pump are switched on at 
predefined time of day. Long press of the button switches the control algorithm 
to manual mode. In manual mode the user can control the lights (single push) and 
filtration pump (double push).

## Prerequisities ##

- RexCore and RPiDrv modules must be installed and running on the Raspberry Pi.
- The wiring must comply with the attached schematics. 

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Compile and download the project to the target device.

## User interface (HMI) ##
The example is accompanied by a graphical user interface generated from Inkscape 
using the RexHMI extension. See the above mentioned tutorial for instructions on 
deploying the HMI on the Raspberry Pi.
 
## Documentation ##

- [Getting started with REX and Raspberry Pi](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_RasPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.