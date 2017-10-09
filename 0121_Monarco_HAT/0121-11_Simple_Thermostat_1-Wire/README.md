Monarco HAT as a simple thermostat 
==================================
 
This folder contains the source files for the demonstration project on using
REX on the Raspberry Pi minicomputer with the Monarco HAT add-on board. 

In this example the Monarco HAT is configured to act as a simple thermostat. The 
temperature is measured by the 1-Wire DS18B20 sensor and the onboard digital 
output 1 (DO1) is switched on and off with a hysteresis of 0.5°C. The output 
signal can control e.g. an external relay.

The measured temperature and status of the output is recorded in the TRND blocks
which allow displaying of the trends (graphs). 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisites ##

- RexCore and MonarcoDrv modules must be installed and running on the Raspberry
Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured 
and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The wiring must comply with the attached schematics. 

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Specify the 64-bit ROM ID of the attached temperature sensor. See the 1-Wire driver manual below.
- Compile and download the project to the target device.
- Switch to watch mode and observe the algorithm (use Target->Watch Selection 
  to display real-time data).
   
## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_UniPi_ENG.html)
- [MonarcoDrv - Monarco HAT driver](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/MonarcoDrv/MonarcoDrv_ENG.html)
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/OwsDrv/OwsDrv_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)

## Additional information ##

- More info about the Monarco HAT can be found at [monarco.io](http://www.monarco.io).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.