Using the MCP23017 I/O expander 
===============================

This folder contains the source files for working with the GPIO pins of the
MCP23017 16-bit I/O expander via I2C bus (e.g. on the Raspberry Pi or ALIX). 
The example is based on the REXLANG user-programmable function block of the REX
Control System. 

The GPIO port A is used for digital outputs. The GPIO port B is used for digital
inputs with the internal pull-up resistors enabled. 

## Timing of the project ##

The algorithm runs each 200 milliseconds (0.2 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 2 = 0.2 

## Prerequisities ##
- RexCore must be installed and running on the target device (Raspberry Pi).
- I2C bus must be enabled and available (e.g. /dev/i2c-1).
- The wiring must comply with the attached datasheet. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the I2C bus by the fname parameter of the REXLANG function block.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the CNB_GPA blocks (Target->Monitor selection) and 
the BDOCT_GPIOB block.
- Toggle the CNB_GPA constants and observe the pins of the MCP23017 I/O 
expander.
- Apply external voltage to GPIOB pins and observe the outputs of BDOCT_GPIOB 
block.  

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_RasPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- MCP23017 datasheet (attached)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.


