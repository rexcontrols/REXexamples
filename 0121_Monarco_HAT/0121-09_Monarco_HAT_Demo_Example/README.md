Monarco HAT DEMO example
=======================

This folder contains the source files for Monarco HAT DEMO example.

## Prerequisites ##
- RexCore and MonarcoDrv must be installed and running on target 
device to run the example

## Timing of the project ##
The algorithm runs each 10 milliseconds (0.01 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 1 = 0.01 s

## Running the examples ##
- The **exec.mdl* file is the project main file. Open with RexDraw.
- Compile and download project to the target device.
- Connect to the HMI using your web browser, e.g. [http://192.168.1.100:8008](http://192.168.1.100:8008) (use the IP address of your target device!)

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and Monarco HAT](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_MonarcoHAT_RPi_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Visit the [Monarco HAT website](http://www.monarco.io).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.
