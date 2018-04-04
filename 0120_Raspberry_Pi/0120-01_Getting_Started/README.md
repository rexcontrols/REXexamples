Getting started with REXYGEN on Raspberry Pi
========================================

This example contains source files of a demonstration project, which is used 
in the Getting started manual for the Raspberry Pi platform.

## Prerequisites ##
- *REXYGEN Runtime Core* and RPiDrv module must be installed and running on the target device 
to run the example
- The wiring must comply with the schematics included in the Getting started 
manual 

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 s

## Running the example ##
- The **exec.mdl* file is the project main file. Open it with *REXYGEN Studio*.
- Compile and download the project to the target device.
- Connect to the HMI using your web browser, e.g. [http://192.168.1.100:8008](http://192.168.1.100:8008) (use the IP address of your target device!)

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Raspberry Pi](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_RasPi_ENG.pdf)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
