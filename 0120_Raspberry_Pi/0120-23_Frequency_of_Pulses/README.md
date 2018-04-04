How to determine frequency of Boolean input signal? 
===================================================

This folder contains the source files demonstrating the evaluation of Boolean 
input signal (digital input) in REXYGEN on the Raspberry Pi 
minicomputer.

The algorithm consists of one quick task for counting the pulses and another 
task for converting the counter value to a frequency estimate and providing 
real-time data trend. Typical application would be estimating wind speed from 
anemometer pulses.

The main idea is counting pulses and comparing the value to a delayed signal. 
The more the signal is delayed, the smoother estimate of frequency you get. 
On the other hand, the signals get delayed... 

Delays of 0.5, 1, 2 and 5 seconds are used in the example. Adjust it to fit 
your application.

The quick task must contain only the very minimum of function blocks necessary 
for collecting the data. Processing of the data can run less frequently to lower
the computational load. 

Note that a pull-down resistor is activated on the input pin. If you want to use 
a pull-up resistor, change the flag from RPI__GPIO25D to RPI__GPIO25U.

## Timing of the project ##

The quick task runs each 2 milliseconds. See the EXEC function block, 
tick = 0.002 s. Therefore the maximum frequency of the pulses is 250 Hz and the
pulses (or gaps between them) must have a width of at least 2 milliseconds. The 
other task runs each 100 milliseconds (0.1 s), tick x ntick0 = 0.002 x 50 = 0.1 

## Prerequisites ##
- *REXYGEN Runtime Core* and RPiDrv modules must be installed and running on the target device
  (Raspberry Pi).

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN on the Raspberry Pi minicomputer](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_RasPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](https://www.rexygen.com/doc/PDF/ENGLISH/RPiDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.


