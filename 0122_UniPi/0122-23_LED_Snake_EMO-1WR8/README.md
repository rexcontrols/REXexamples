Controlling relay outputs of the EMO-1WR8 
=========================================
 
This folder contains the source files for the demonstration project on using
REX on the Raspberry Pi minicomputer with the UniPi extension
board and the EMO-1WR8 1-Wire relay module.

The relays of UniPi itself and the relays of the EMO-1WR8 relay board are 
synchronized in a demo algorithm, which illustrates seamless integration of 
various I/O devices using REX.

The ATMT state automaton cycles through 4 states to gradually increase the speed 
of the "LED snake". The appropriate pulse generator is selected according to the 
ATMT automaton state. The generated pulses move the snake bit by bit (literally 
- bitwise shift to left is used).

## Prerequisites ##

- RexCore and RPiDrv modules must be installed and running on the Raspberry Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The EMO-1WR8 relay board must be connected.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Specify the 64-bit ROM ID of the EMO-1WR8 relay board. See the 1-Wire driver manual below.
- Compile and download the project to the target device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_UniPi_ENG.html)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RPiDrv/RPiDrv_ENG.html)
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/OwsDrv/OwsDrv_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.