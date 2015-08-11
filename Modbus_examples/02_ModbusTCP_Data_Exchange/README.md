Modbus TCP data exchange (Ethernet connection) 
==============================================

This folder contains the source files for the demonstration project on data
exchange between two devices over the Modbus TCP protocol.

Both the master and slave stations are implemented in the REX Control System
but any of them can be replaced by another device supporting the Modbus TCP 
protocol. 

## Prerequisities ##
- RexCore and MbDrv modules must be installed and running on the individual 
devices to run the examples.

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.

## Modbus registers##

### Data out (from the master's point of view) ###
| Register No. | Meaning                                | Data range            |
| ------------:|:-------------------------------------- |---------------------- |
|            0 | Unsigned integer                       |         0 .. 65535    |
|            1 | Signed integer                         |    -32768 .. 32767    |
|            2 | Unsigned integer                       |         0 .. 65535    |
|            3 | Signed integer                         |    -32768 .. 32767    |
|          4-5 | Floating-point number                  |  -3.4E+38 .. 3.4E+38  |
|          6-9 | Double precision floating-point number | -1.7E+308 .. 1.7E+308 |

### Data in (from the master's point of view) ###
| Register No. | Meaning                                | Data range            |
| ------------:|:-------------------------------------- |---------------------- |
|         2048 | Unsigned integer                       |         0 .. 65535    |
|         2049 | Signed integer                         |    -32768 .. 32767    |
|         2050 | Unsigned integer                       |         0 .. 65535    |
|         2051 | Signed integer                         |    -32768 .. 32767    |
|    2052-2053 | Floating-point number                  |  -3.4E+38 .. 3.4E+38  |
|    2054-2057 | Double precision floating-point number | -1.7E+308 .. 1.7E+308 |

### Adding signals and changing Modbus register mapping ###
Go to Modbus driver configuration (MTM block in the master, MTS block in the 
slave) and press "Special edit" for Modbus registers configuration. Make sure 
to read the Modbus driver documentation (see below).

## Documentation ##

- [MbDrv - Modbus driver](http://www.rexcontrols.com/media/DOC/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.