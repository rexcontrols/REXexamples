Modbus RTU data loopback, Monarco HAT and USB RS-485 adaptor 
============================================================

This folder contains the source files for the loopback test of RS-485 
communication on Raspberry Pi with Monarco HAT and a USB RS-485 dongle. Data
is exchanged over the Modbus RTU protocol.

Both the master and slave stations are implemented on the Raspberry Pi itself, 
the project is meant only for testing and debugging purposes. 

## Prerequisites ##
- *REXYGEN Runtime Core*, MonarcoDrv and MbDrv modules must be installed and 
running on the Raspberry Pi to run the example.

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Switch to Watch mode and observe the algorithm.

## Modbus registers##

### Data out (from the master's point of view) ###
| Register No. | Meaning                                | Data range            |
| ------------:|:-------------------------------------- |---------------------- |
|         2048 | Unsigned integer                       |         0 .. 65535    |
|         2049 | Signed integer                         |    -32768 .. 32767    |
|         2050 | Unsigned integer                       |         0 .. 65535    |
|         2051 | Signed integer                         |    -32768 .. 32767    |
|    2052-2053 | Floating-point number                  |  -3.4E+38 .. 3.4E+38  |
|    2054-2057 | Double precision floating-point number | -1.7E+308 .. 1.7E+308 |

### Adding signals and changing Modbus register mapping ###
Go to Modbus driver configuration (MBM block for the master, MBS block for the 
slave) and press "Configure" for Modbus registers configuration. Make sure 
to read the Modbus driver documentation (see below).

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Monarco HAT](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN ](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN ](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.