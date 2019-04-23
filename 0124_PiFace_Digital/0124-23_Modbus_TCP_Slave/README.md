Raspberry Pi with PiFace Digital as Modbus TCP slave 
====================================================
 
This folder contains the source files for the demonstration project on using
REXYGEN on the Raspberry Pi minicomputer with the PiFace Digital 
extension board. 

In this example the PiFace Digital is used as a Modbus TCP slave to allow 
integration in complex or hierarchical control systems.

## Prerequisites ##

- *REXYGEN Runtime Core*, RPiDrv and MbDrv modules must be installed and running on the 
Raspberry Pi.

## Running the example ##

- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.

## Modbus TCP slave setup ##
In this example the Modbus slave has 8 output coils at addresses 0 to 7 and 8 
input contacts at addresses 0 to 7. 

The Modbus master can use the commands FC05 (write single coil) or FC15 (write 
multiple coils) to manipulate the outputs (coils) and FC02 (read discrete 
inputs) to read the inputs.  

### Adding signals and changing Modbus register mapping ###
Go to Modbus TCP Slave driver (MTS block) configuration and press "Configure" 
for Modbus registers configuration. Make sure to read the Modbus driver 
documentation (see below).

## Documentation ##

- [Getting started with REXYGEN on Raspberry Pi](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_RasPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi v1.1 Intellisys PIO)](https://www.rexygen.com/doc/PDF/ENGLISH/RPiDrv_ENG.pdf)
- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.