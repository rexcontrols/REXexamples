Controlling relay outputs and reading digital inputs of the EMO-1WR4DI4 
=======================================================================
 
This folder contains the source files for the demonstration project on using
the UniPi extension board and the EMO-1WR4DI4 1-Wire board in the REXYGEN System.

The relays of UniPi itself and the relays of the EMO-1WR4DI4 board are 
synchronized in a demo algorithm, which illustrates seamless integration of 
various I/O devices using REXYGEN.

The ATMT state automaton cycles through 4 states to gradually increase the speed 
of the "LED snake". The appropriate pulse generator is selected according to the 
ATMT automaton state. The generated pulses move the snake bit by bit (literally 
- bitwise shift to left is used).

Digital inputs of the EMO-1WR4DI4 board are read and recorded in the TRND blocks
which allow displaying of the trends (graphs) in the *REXYGEN Diagnostics* diagnostic tool. 

As a side effect, the status of the relays is read along the status of the 
digital inputs. This can be used for verification.

## Timing of the project ##

The algorithm runs each 20 milliseconds (0.02 s). See the EXEC function block,  
tick x ntick0 = 0.02 x 1 = 0.02 

## Prerequisites ##

- *REXYGEN Runtime Core* and RPiDrv modules must be installed and running on the Raspberry Pi.
- Owserver (part of the OWFS package) must be installed, correctly configured and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.
- The EMO-1WR4DI4 relay board must be connected.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with *REXYGEN Studio*.
- Specify the 64-bit ROM ID of the EMO-1WR4DI4 board. See the 1-Wire driver manual below.
- Compile and download the project to the target device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and UniPi board (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_UniPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi v1.1 Intellisys PIO)](https://www.rexygen.com/doc/PDF/ENGLISH/RPiDrv_ENG.pdf)
- [OwsDrv - 1-Wire driver](https://www.rexygen.com/doc/PDF/ENGLISH/OwsDrv_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.