Getting started with REX on Pigeon PLC
========================================

This example contains source files of a demonstration project, which is used 
in the Getting started manual for the Pigeon PLC platform.

## Prerequisites ##
- RexCore and RPiDrv module must be installed and running on the target device 
to run the example
- The wiring must comply with the schematics included in the Getting started 
manual 

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 s

## Running the example ##
- The **exec.mdl* file is the project main file. Open it with RexDraw.
- Compile and download the project to the target device.
- Connect to the HMI using your web browser, e.g. [http://192.168.1.100:8008](http://192.168.1.100:8008) 
(use the IP address of your target device!)

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- [Pigeon PLC website](http://pigeoncomputers.com/)
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.