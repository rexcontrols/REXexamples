Monarco HAT - Modbus RTU example (via serial line) 
==================================================

This folder contains the source files for the demonstration project on data
exchange between two devices over the Modbus RTU protocol using Monarco HAT.

The example is meant to communicate with Advantech ADAM 4024 4-channel Analog
Output Module, which serves as a slave station. Therefore the master station
is implemented in REXYGEN . For testing purposes there is also Advantech
ADAM 4024 simulator available in a separate folder.

## Prerequisites ##
- *REXYGEN Runtime Core*, MbDrv and MonarcoDrv modules must be installed and running on the
device(s) to run the example(s).
- Advantech ADAM 4024 configuration using Advantech ADAM 4000 5000 Utility. Make
sure to set the module communication to Modbus RTU with following parameters:
Baudrate: 9600; Parity: none; Data bits: 8; Stop bits: 1.
- The example presumes that the Analog Outputs are configured as Current Outputs
with range 0~20 mA.
- Doublecheck the module wiring!

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.

## Modbus registers##
- For Modbus Mapping table see Advantech ADAM 4000 Series User Manual (see the link below)

### Adding signals and changing Modbus register mapping ###
Go to Modbus driver configuration (MBM block in the master, MBS block in the 
slave) and press "Configure" for Modbus registers configuration. Make sure 
to read the Modbus driver documentation (see below).

### Changing Modbus RTU settings ###
Go to Monarco driver configuration (MNR block in project main file) and press
"Configure" to Modbus RTU configuration. Make sure to read the Monarco HAT driver 
documentation (see below).

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN  and Monarco HAT](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [Advantech ADAM 4000 Series User Manual](http://advdownload.advantech.com/productfile/Downloadfile1/1-123YBOV/UM-ADAM-4000_SERIES-ED0-1-EN.PDF)
- [Function blocks of REXYGEN ](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN ](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [Monarco HAT website](http://www.monarco.io)
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN .