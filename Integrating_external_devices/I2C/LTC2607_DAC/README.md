Using the LTC2607 DAC 
=====================

This folder contains the source files for controlling the LTC2607 2-channel
16-bit DAC via I2C bus, which is available e.g. on the Raspberry Pi minicomputer. 
The example is based on the REXLANG user-programmable function block of the REX
Control System. 

Channel A is controlled by an integer constant (try changing it on-the-fly), 
while a sine wave is generated at channel B (frequency and amplitude can be 
adjusted on-the-fly as well).  

## Prerequisities ##

- I2C bus must be enabled and available (e.g. /dev/i2c-1 on the Raspberry Pi)

## Documentation ##

- [Getting started with REX on the Raspberry Pi minicomputer](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_RasPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)

## Additional information ##

Visit the [REX Controls company webpage](http://www.rexcontrols.com/rex-control-system-raspberry-pi) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System and the Raspberry
Pi.

Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org)

