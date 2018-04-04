Reading analog inputs from Advantech ADAM 6217
==============================================

This folder contains the source files for reading analog inputs from Advantech
ADAM 6217 over the Modbus TCP protocol.

Modbus TCP master is implemented in REXYGEN, ADAM 6217 is Modbus
TCP slave.

## Prerequisities ##
- *REXYGEN Runtime Core* and MbDrv modules must be installed and running on target 
device to run the examples.

## Timing of the project ##
The Modbus driver runs every 250 milliseconds (0.25 s). See the EXEC function block,  
tick x factor (MTM driver) = 0.05 x 5 = 0.25 s

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.

### Adding signals and changing Modbus register mapping ###
Go to Modbus driver configuration (MTM block in the master, MTS block in the 
slave) and press "Special edit" for Modbus registers configuration. Make sure 
to read the Modbus driver documentation (see below).

## Documentation ##
- [Datasheet ADAM-6200 Series] (http://www.bb-elec.com/Products/Manuals/ADAM-6200m-pdf.pdf)
- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
