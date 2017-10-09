PiFace Digital as Modbus TCP master 
===================================
 
This folder contains the source files for the demonstration project on using
REX on the Raspberry Pi minicomputer with the PiFace Digital
expansion board. 

This example implements a Modbus TCP master for controlling a Modbus TCP slave
device.

## Prerequisites ##

- RexCore, RPiDrv and MbDrv modules must be installed and running on the Raspberry Pi.
- SPI bus must be enabled on the Raspberry Pi
- The Modbus TCP slave device must be available. It is supposed to have the IP address 
192.168.1.111.

## Running the example ##

- The **exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.

## Modbus TCP slave setup ##
In this example the Modbus slave has 8 output coils at addresses 0 to 7. 

The Modbus master can use the commands FC05 (write single coil) or FC15 (write 
multiple coils) to manipulate the outputs (coils). 

### Adding signals, changing Modbus register mapping, changing IP address of the slave device ###

Go to Modbus TCP Master driver (MTM block) configuration and press "Configure" 
for Modbus configuration. Make sure to read the Modbus driver documentation (see below).

## Documentation ##

- [Getting started with REX and Raspberry Pi](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_RasPi_ENG.html)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RPiDrv/RPiDrv_ENG.html)
- [MbDrv - Modbus driver](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/MbDrv/MbDrv_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.