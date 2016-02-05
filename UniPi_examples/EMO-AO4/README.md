Using the EMO-AO4/12 expansion board (UniPi) 
============================================

This project demonstrates the use of the EMO-AO4/12 expansion board for UniPi.

Channels 0..3 control the voltage outputs CH0..CH3. Channels 0..2 are set to 
user-defined constants. Channel 3 is controlled by sine wave generator.   

Channels 4..5 control the PWM outputs of the board. 

Feel free to add as many channels as you want. 

You may connect the outputs of EMO-AO4/12 expansion board to the analog inputs 
of the UniPi itself for verification. The measured values are recorded in the 
TRND block which allows displaying of the trends (graphs) in the RexView 
diagnostic tool. 

## Timing of the project ##

The algorithm runs each 50 milliseconds (0.05 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 1 = 0.05 

## Prerequisities ##
- RexCore and RPiDrv modules must be installed and running on the target device 
(Raspberry Pi).
- I2C bus must be enabled and available on the Raspberry Pi (/dev/i2c-1).
- The EMO-AO4/12 expansion board must be connected, default address 64 (0x40)
  is assumed.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the purple blocks (Target->Monitor selection).
- Modify the CNR constants on-the-fly and observe the voltage output signals.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_UniPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.


