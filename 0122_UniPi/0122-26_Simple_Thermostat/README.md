UniPi as a simple thermostat 
============================
 
This folder contains the source files for the demonstration project on using
REX on the Raspberry Pi minicomputer with the UniPi extension
board. 

In this example the UniPi is configured to act as a simple thermostat. The 
temperature is measured by the 1-Wire DS18B20 sensor and the onboard relay 1 is
switched on and off with a hysteresis of 0.5°C.

The measured temperature and status of the relay is recorded in the TRND blocks
which allow displaying of the trends (graphs) in the RexView diagnostic tool. 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisites ##

- RexCore and RPiDrv modules must be installed and running on the Raspberry Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The wiring must comply with the attached schematics. 

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Specify the 64-bit ROM ID of the attached temperature sensor. See the 1-Wire driver manual below.
- Compile and download the project to the target device.
- Switch to online mode and watch the algorithm (use Target->Watch Selection 
  to display data).
   
## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_UniPi_ENG.html)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RPiDrv/RPiDrv_ENG.html)
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/OwsDrv/OwsDrv_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.