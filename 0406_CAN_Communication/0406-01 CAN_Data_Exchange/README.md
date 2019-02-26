Data exchange via CAN bus 
=========================

This folder contains the source files for the demonstration project on data
exchange between two devices over the CAN bus.

Both stations are implemented in REX but any of them can be replaced by another 
device supporting with CAN bus. 

## Prerequisites ##
- *REXYGEN Runtime Core* and *CanDrv* modules must be installed and running on the individual 
devices to run the examples.

## Running the examples ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device(s).
- Switch to **Watch mode** and observe the algorithm in real-time.
- Station 1 sends one CAN message when invoked by the MP_SEND function block 
(when in **Watch mode**, open the parameters dialog of the MP_SEND block and 
set the BSTATE parameter to ON).
- Station 2 receives the data. Note that it only receives messages which 
correspond with filter settings of the CanRecv block.

## Documentation ##

- [CanDrv - CAN communication driver](https://www.rexygen.com/doc/PDF/ENGLISH/CanDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.