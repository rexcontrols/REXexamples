Reading MCP3008 ADC data via SPI bus 
====================================

This folder contains the source files for reading ADC data from the MCP3008
8-channel 10-bit DAC via SPI bus, which is available e.g. on the Raspberry Pi 
minicomputer. The example is based on the REXLANG user-programmable function 
block of the REX Control System. 

The 10-bit data obtained from the ADC chip are converted to voltage readings 
using the LIN function block. The y2 parameters of all LIN function blocks must 
be changed according to the supplied voltage reference, which can be achieved 
using the SETPR function blocks to control the parameters "over the air". 

The time plot of the measured data can be displayed in the RexView diagnostic 
program.

## Prerequisities ##

- SPI bus must be enabled and available (e.g. /dev/spidev0.0 on the Raspberry Pi)

## Documentation ##

- [Getting started with REX on the Raspberry Pi minicomputer](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_RasPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)

## Additional information ##

Visit the [REX Controls company webpage](http://www.rexcontrols.com/rex-control-system-raspberry-pi) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System and the Raspberry
Pi.

Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org)


