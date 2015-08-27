Using the EMO-AO4/12 expansion board (UniPi) 
============================================

This project demonstrates the use of the EMO-AO4/12 expansion board for UniPi.
The example is based on the REXLANG user-programmable function block of the REX
Control System. 

Channels 0..3 control the voltage outputs CH0..CH3. Channels 0..2 are set to 
user-defined constants. Channel 3 is controlled by sine wave generator. The SAT 
function block restricts the signal to the 0V..10V range. The LIN block converts 
the range 0V..10V to the 12-bit range 0..4096.  

Channels 4..5 control the PWM outputs of the board. The range of the input 
signal is not chacked.

The integer values are processed by the REXLANG function block and sent to the 
EMO-AO4/12 board via the I2C bus. See the **.c* file for details. Also the 
datasheet of PCA9685 is worth studying.

Feel free to add as many channels as you want. You will need to modify both the 
**.mdl* and **.c* files.

You may connect the outputs of EMO-AO4/12 expansion board to the analog inputs 
of the UniPi itself for verification. The measured values are recorded in the 
TRND block which allow displaying of the trends (graphs) in the RexView 
diagnostic tool. 

## Timing of the project ##

The algorithm runs each 50 milliseconds (0.05 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 1 = 0.05 

## Prerequisities ##
- RexCore must be installed and running on the target device (Raspberry Pi).
- I2C bus must be enabled and available on the Raspberry Pi (/dev/i2c-1).
- The EMO-AO4/12 expansion board must be connected.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the I2C bus by the fname parameter of the REXLANG function block.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the purple blocks (Target->Monitor selection).
- Modify the CNR constants on-the-fly and observe the voltage output signals.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_UniPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- PCA9685 datasheet (attached)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.


