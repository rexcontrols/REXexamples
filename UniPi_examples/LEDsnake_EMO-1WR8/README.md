Controlling relay outputs of the EMO-1WR8 
=========================================
 
This folder contains the source files for the demonstration project on using
the REX Control System on the Raspberry Pi minicomputer with the UniPi extension
board and the EMO-1WR8 1-Wire relay module.

The relays of UniPi itself and the relays of the EMO-1WR8 relay board are 
synchronized in a demo algorithm, which illustrates seamless integration of 
various I/O devices using the REX Control System.

The ATMT state automaton cycles through 4 states to gradually increase the speed 
of the "LED snake". Individual pulse generator is selected based on the ATMT 
automaton state. The generated pulses move the snake bit by bit (literally - 
bitwise shift to left is used).

## Prerequisities ##

- RexCore and RPiDrv modules must be installed and running on the Raspberry Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The EMO-1WR8 relay board must be connected.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Specify the 64-bit ROM ID of the EMO-1WR8 relay board. See the 1-Wire driver manual below.
- Compile and download the project to the target device.

## Documentation ##

- [Getting started with REX and UniPi board (Raspberry Pi)](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_UniPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](http://www.rexcontrols.com/media/DOC/ENGLISH/RPiDrv_ENG.pdf)
- [OwsDrv - 1-Wire driver](http://www.rexcontrols.com/media/DOC/ENGLISH/OwsDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.