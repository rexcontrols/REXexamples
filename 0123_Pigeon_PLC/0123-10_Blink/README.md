Blinking outputs of the Pigeon PLC
==================================

A very basic project which demonstrates access to digital outputs of the Pigeon 
PLC platform.

## Prerequisites ##

- *REXYGEN Runtime Core* and RPiDrv module must be installed and running on the 
Pigeon PLC

## Timing of the project ##
The algorithm runs each 20 milliseconds (0.02 s). See the EXEC function block,  
tick x ntick0 = 0.02 x 1 = 0.02 s

## Running the example ##

- The **exec.mdl* file is the project main file
- Open it with *REXYGEN Studio*, compile and download it to the target device

## User interface (HMI) ##

The example is accompanied by a HTML5-based user interface built on the 
WebBuDi framework (Web Buttons and Displays).

## Documentation ##

- [Getting started with REXYGEN and Pigeon PLC](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_Pigeon_PLC_ENG.pdf)
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- [Pigeon PLC website](http://pigeoncomputers.com/)
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.