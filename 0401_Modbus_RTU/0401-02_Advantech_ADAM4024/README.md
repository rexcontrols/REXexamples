Advantech ADAM 4024 Modbus RTU Example 
======================================

This folder contains the source files for the demonstration project on data
exchange between two devices over the Modbus RTU protocol.

The example is meant to communicate with Advantech ADAM 4024 4-channel Analog
Output Module, which serves as a slave station. Therefore the master station
is implemented in REX. For testing purposes there is also Advantech
ADAM 4024 simulator available in the separate folder.

## Prerequisites ##
- RexCore and MbDrv modules must be installed and running on the
device(s) to run the example(s).
- Advantech ADAM 4024 configuration using Advantech ADAM 4000 5000 Utility. Make
sure to set the module communication to Modbus RTU with following parameters:
Baudrate: 9600; Parity: none; Data bits: 8; Stop bits: 1.
- The example presumes that the Analog Outputs are configured as Current Outputs
with range 0~20 mA.
- Doublecheck the module wiring!

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.

## Modbus registers##
- For Modbus Mapping table see Advantech ADAM 4000 Series User Manual (see the link below)

### Adding signals and changing Modbus register mapping and settings###
Go to Modbus driver configuration (MBM block in the master, MBS block in the 
slave) and press "Configure" for Modbus registers configuration. Make sure 
to read the Modbus driver documentation (see below).

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and Monarco HAT](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_MonarcoHAT_RPi_ENG.html)
- [MbDrv - Modbus driver](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/MbDrv/MbDrv_ENG.html)
- [Advantech ADAM 4000 Series User Manual](http://advdownload.advantech.com/productfile/Downloadfile1/1-123YBOV/UM-ADAM-4000_SERIES-ED0-1-EN.PDF)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.