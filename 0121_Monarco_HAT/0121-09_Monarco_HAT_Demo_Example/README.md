Monarco HAT DEMO example
=======================

This folder contains the source files for Monarco HAT DEMO example.

## Prerequisites ##
- *REXYGEN Runtime Core* and MonarcoDrv must be installed and running on target 
device to run the example

## Timing of the project ##
The algorithm runs each 10 milliseconds (0.01 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 1 = 0.01 s

## Running the examples ##
- The **exec.mdl* file is the project main file. Open with *REXYGEN Studio*.
- Compile and download project to the target device.
- Connect to the HMI using your web browser, e.g. [http://192.168.1.100:8008](http://192.168.1.100:8008) (use the IP address of your target device!)

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Monarco HAT](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [Monarco HAT website](http://www.monarco.io).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
