Using the MCP4822 DAC via SPI
===============================

This folder contains the source files for controlling MCP4822 dual channel
12-bit DAC via SPI bus, which is available e.g. on the Raspberry Pi minicomputer.
The example is based on the REXLANG user-programmable function block of the
REXYGEN. 

It is controlled by an integer constants "CNI_CHx" (try changing it on-the-fly).

## Timing of the project ##
The algorithm runs each 200 milliseconds (0.2 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 2 = 0.2 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device (Raspberry Pi).
- SPI bus must be enabled and available (e.g. /dev/spidev0.0 on the Raspberry Pi)
- The wiring must comply with the attached datasheet. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Specify the SPI bus by the "p0" parameter of the REXLANG function block.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the REXLANG block (Target->Watch Selection).

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN on the Raspberry Pi minicomputer](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_RasPi_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- MCP4921 datasheet (attached)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.