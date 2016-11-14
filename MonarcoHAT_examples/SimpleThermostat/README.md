Monarco HAT as a simple thermostat 
==================================
 
This folder contains the source files for the demonstration project on using
the REX Control System on the Raspberry Pi minicomputer with the Monarco HAT 
add-on board. 

In this example the Monarco HAT is configured to act as a simple thermostat. The 
temperature is measured by the 1-Wire DS18B20 sensor and the onboard digital
output no. 1 is switched on and off with a hysteresis of 0.5°C. The digital 
output can drive an external relay.

The measured temperature and status of the digital output is recorded in the 
TRND blocks which allow displaying of the trends (graphs). 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisities ##

- RexCore and MonarcoDrv modules must be installed and running on the Raspberry Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The DS18B20 temperature sensor must be connected.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Specify the 64-bit ROM ID of the attached temperature sensor. See the 1-Wire driver manual below.
- Compile and download the project to the target device.
- Switch to online mode and watch the algorithm (use Target->Monitor selection 
  to display data).

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and Monarco HAT](https://www.rexcontrols.com/media/2.50.1/doc/PDF/ENGLISH/RexGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexcontrols.com/media/2.50.1/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.1/doc/PDF/ENGLISH/OwsDrv_ENG.pdf)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [Monarco HAT website](http://www.monarco.io)
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.