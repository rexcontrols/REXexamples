Using the LTC2607 DAC 
=====================

This folder contains the source files for controlling the LTC2607 2-channel
16-bit DAC via I2C bus, which is available e.g. on the Raspberry Pi minicomputer. 
The example is based on the REXLANG user-programmable function block of the REX
Control System. 

Channel A is controlled by an integer constant (try changing it on-the-fly), 
while a sine wave is generated at channel B (frequency and signal type can be 
adjusted on-the-fly as well).  

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
- Observe voltage at DAC channel A and channel B.
- Change the CNI_channelA constant by hand as needed.
- Change the frequency and signal type in the SG signal generator as needed.  

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_RasPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- MCP23017 datasheet (attached)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.