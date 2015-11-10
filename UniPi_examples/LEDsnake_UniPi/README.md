LED snake on UniPi relays 
=========================
 
This folder contains the source files for the demonstration project on pool 
automation using the REX Control System and the Raspberry Pi minicomputer with 
the UniPi extension board.

The relays of UniPi are controlled to create an illusion of a "snake" moving 
from RELAY1 to RELAY8 and then cycle to RELAY1. The speed of movement is 
selected by the UniPi inputs I01 through I06. 

The BIS binary signal generators produce pulses at various frequencies. The 
UniPi inputs determine which of these signals is used to move the snake 
bit-by-bit.  

Note that this is only a demonstration algorithm. **If run for prolonged periods
it significantly reduces the lifetime of the relays!**. 

## Timing of the project ##

The algorithm runs each 5 milliseconds (0.005 s). See the EXEC function block,  
tick x ntick0 = 0.005 x 1 = 0.005 

## Prerequisities ##

- RexCore and RPiDrv modules must be installed and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Compile and download the project to the target device.
- Activate one of the inputs to move the snake.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_UniPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](http://www.rexcontrols.com/media/DOC/ENGLISH/RPiDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.