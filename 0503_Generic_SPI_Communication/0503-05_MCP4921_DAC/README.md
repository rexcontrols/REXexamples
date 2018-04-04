Using MCP4921 DAC via SPI bus 
=============================

This folder contains the source files for controlling MCP4921 single channel
12-bit DAC via SPI bus, which is available e.g. on the Raspberry Pi minicomputer.
The example is based on the REXLANG user-programmable function block of the
REXYGEN. 

It is controlled by an integer constant "CNI_DAC" (try changing it on-the-fly).

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.1 

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
