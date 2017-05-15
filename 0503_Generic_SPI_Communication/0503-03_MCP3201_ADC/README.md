Reading MCP3201 ADC via SPI bus 
===============================

This folder contains the source files for reading ADC data from the MCP3201
single-channel 12-bit ADC via SPI bus, which is available e.g. on the Raspberry Pi 
minicomputer. The example is based on the REXLANG user-programmable function 
block of REX. 

The 12-bit data obtained from the ADC chip are converted to voltage reading 
using the LIN function block. The y2 parameters of LIN function blocks must 
be changed according to the supplied voltage reference.

The time plot of the measured data can be displayed in the RexView diagnostic 
program.

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.1 

## Prerequisites ##
- RexCore must be installed and running on the target device (Raspberry Pi).
- SPI bus must be enabled and available (e.g. /dev/spidev0.0 on the Raspberry Pi)
- The wiring must comply with the attached datasheet. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the SPI bus by the "p0" parameter of the REXLANG function block.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the REXLANG block (Target->Watch Selection).
- Apply external voltage to the ADC pins and observe the received data.  

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_RasPi_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- MCP3201 datasheet (attached)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.
