Pool automation with web-based graphical HMI 
============================================

This folder contains the source files for the demonstration project on pool 
automation using REXYGEN and the Raspberry Pi minicomputer with 
the UniPi extension board.

A single push-button connected to digital input I01 can be used for controlling 
the pool. In automatic mode the lights and filtration pump are switched on at 
predefined time of day. Long press of the button switches the control algorithm 
to manual mode. In manual mode the user can control the lights (single push) and 
filtration pump (double push).

In this example the UniPi also controls the water temperature, it acts as a 
simple thermostat. The temperature is measured by the 1-Wire DS18B20 sensor and 
the onboard relay 5 is switched on and off with a hysteresis of 0.5°C.

The measured temperature and status of the relay is recorded in the TRND blocks
which allow displaying of the trends (graphs) in the *REXYGEN Diagnostics* diagnostic tool. 

## Prerequisites ##

- *REXYGEN Runtime Core* and RPiDrv modules must be installed and running on the Raspberry Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The DS18B20 temperature sensor must be connected.
- The wiring must comply with the attached schematics. 

## Running the example ##

- The **exec.mdl* file is the project main file, open it with *REXYGEN Studio*.
- Specify the 64-bit ROM ID of the attached temperature sensor. See the 1-Wire driver manual below.
- Compile and download the project to the target device.

## User interface (HMI) ##

The example is accompanied by a graphical user interface generated from *REXYGEN HMI Designer*. See the above mentioned tutorial for instructions on 
deploying the HMI on the Raspberry Pi.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN  and UniPi board](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_UniPi_ENG.pdf)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [OwsDrv - 1-Wire driver](https://www.rexygen.com/doc/PDF/ENGLISH/OwsDrv_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.