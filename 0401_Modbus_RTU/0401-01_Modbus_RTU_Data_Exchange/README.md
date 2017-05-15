Modbus RTU data exchange (via serial line) 
==========================================

This folder contains the source files for the demonstration project on data
exchange between two devices over the Modbus RTU protocol.

Both the master and slave stations are implemented in REX
but any of them can be replaced by another device supporting the Modbus RTU 
protocol (serial line connection, e.g. RS485/422 or RS232). 

## Prerequisites ##
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
Go to Modbus driver configuration (MBM block in the master, MBS block in the 
slave) and press "Configure" for Modbus registers configuration. Make sure 
to read the Modbus driver documentation (see below).

## Documentation ##

- [MbDrv - Modbus driver](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/MbDrv/MbDrv_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.