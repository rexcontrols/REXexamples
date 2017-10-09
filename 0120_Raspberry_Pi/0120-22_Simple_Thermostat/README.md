Raspberry Pi as a simple thermostat 
===================================
 
This folder contains the source files for the demonstration project on using
REX on the Raspberry Pi minicomputer. 

In this example the Raspberry Pi is configured to act as a simple thermostat. 
The temperature is measured by the 1-Wire DS18B20 sensor and the GPIO pin 17 
switches a relay on and off with a hysteresis of 0.5°C.

The measured temperature and status of the relay is recorded in the TRND blocks
which allow displaying of the trends (graphs) in the RexView diagnostic tool. 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisites ##
- RexCore, RPiDrv and OwsDrv modules must be installed and running on the target 
  device (Raspberry Pi).
- Owserver (part of the OWFS package) must be installed, correctly configured 
  and running on the Raspberry Pi.
- The DS18B20 temperature sensor must be connected. See the attached wiring 
  diagram.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the 64-bit ROM ID of the attached temperature sensor. See the 1-Wire 
  driver manual below.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm (use Target->Watch Selection 
  to display data).

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_RasPi_ENG.html)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RPiDrv/RPiDrv_ENG.html)
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/OwsDrv/OwsDrv_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.


