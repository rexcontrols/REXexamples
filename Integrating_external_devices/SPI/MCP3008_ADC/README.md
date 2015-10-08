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

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.5 

## Prerequisities ##
- RexCore must be installed and running on the target device (Raspberry Pi).
- SPI bus must be enabled and available (e.g. /dev/spidev0.0 on the Raspberry Pi)
- The wiring must comply with the attached datasheet. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the SPI bus by the fname parameter of the REXLANG function block.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the REXLANG block (Target->Monitor selection).
- Apply external voltage to the ADC pins and observe the received data.  

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_RasPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- MCP3008 datasheet (attached)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.
