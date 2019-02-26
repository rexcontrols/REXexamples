Monarco HAT as Modbus TCP slave 
===============================
 
This folder contains the source files for the demonstration project on using
REXYGEN on the Raspberry Pi minicomputer with the Monarco HAT extension
board. 

In this example the Monarco HAT is used as a Modbus TCP slave to allow 
integration in complex or hierarchical control systems.

## Prerequisites ##

- *REXYGEN Runtime Core*, *RPiDrv* and *MbDrv* modules must be installed and 
running on the Raspberry Pi.

## Running the example ##

- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.

## Modbus registers ##
Modbus holding registers are used for data exchange. Use the Read Holding 
Registers command (FC=03) for reading the status of Monarco HAT inputs and the 
Preset Multiple Registers command (FC=16) to manipulate the outputs. 

### Monarco HAT input signals ###
| Register No. | Meaning                         | Data range |
| ------------:|:------------------------------- |:---------- |
|            0 | Digital inputs (LSB=DI1)        | 0..15      |
|            1 | Analog input 1 (0..10V, 12-bit) | 0..4095    |
|            2 | Analog input 2 (0..10V, 12-bit) | 0..4095    |

### Monarco HAT output signals ###
| Register No. | Meaning                          | Data range |
| ------------:|:-------------------------------- |:---------- |
|         2048 | Digital outputs (LSB=DO1)        | 0..15      |
|         2049 | Analog output 1 (0..10V, 12-bit) | 0..4095    |
|         2050 | Analog output 2 (0..10V, 12-bit) | 0..4095    |

### Adding signals and changing Modbus register mapping ###
Go to Modbus TCP Slave driver (MTS block) configuration and press "Configure" 
for Modbus registers configuration. Make sure to read the Modbus driver 
documentation (see below).

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Monarco HAT (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [Monarco HAT website](http://www.monarco.io).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.