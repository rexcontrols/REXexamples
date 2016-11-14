UNICA 1-Wire sensor module example 
==================================

This folder contains the source files for demo project on using UNICA 1-Wire sensor module "U1WTVS".
This module measures temperature, relative humidity and light intensity.

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5s 

## Prerequisities ##
- RexCore and OwsDrv modules must be installed and running on the target 
  device (e.g. Raspberry Pi).
- Owserver (part of the OWFS package) must be installed, correctly configured 
  and running on the target device.
- UNICA 1-Wire sensor module must be connected. The wiring must comply with datasheet - see link below. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the 64-bit ROM ID of the attached sensor module. See the 1-Wire 
  driver manual below.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/OwsDrv/OwsDrv_ENG.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [UNICA 1-Wire sensor module datasheet] (http://www.sedtronic.cz/soubory/produkty/Manual-V2-EN.pdf)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- UNICA 1-Wire sensor module "U1WTVS" (http://www.sedtronic.cz/10001,en_unica-1-wire-sensor-module-type-u1wtvs.html)
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.
