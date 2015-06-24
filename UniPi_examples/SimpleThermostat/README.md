UniPi as a simple thermostat 
============================
 
This folder contains the source files for the demonstration project on using
the REX Control System on the Raspberry Pi minicomputer with the UniPi extension
board. 

In this example the UniPi is configured to act as a simple thermostat. The 
temperature is measured by the 1-Wire DS18B20 sensor and the onboard relay 1 is
switched on and off with a hysteresis of 0.5°C.

The measured temperature and status of the relay is recorded in the TRND blocks
which allow displaying of the trends (graphs) in the RexView diagnostic tool. 

It is necessary to have the owserver (part of the OWFS package) running and 
correctly configured, namely the 64-bit ROM ID of the attached temperature 
sensor must be specified. See the manual of the 
[1-Wire driver for the REX Control System](http://www.rexcontrols.com/media/DOC/ENGLISH/OwsDrv_ENG.pdf).
 
## Documentation ##

- [Getting started with REX and UniPi board (Raspberry Pi)](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_UniPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](http://www.rexcontrols.com/media/DOC/ENGLISH/RPiDrv_ENG.pdf)
- [OwsDrv - 1-Wire driver](http://www.rexcontrols.com/media/DOC/ENGLISH/OwsDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)

## Additional information ##

Visit the [REX Controls company webpage](http://www.rexcontrols.com/rex-control-system-raspberry-pi) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System and the Raspberry
Pi.

More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).

Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).

1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).