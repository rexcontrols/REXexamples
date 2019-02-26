Using PWM outputs of the Monarco HAT
====================================

This folder contains the source files for a demonstration project on using the 
output signals of the Monarco HAT in PWM mode.

## Prerequisites ##
- *REXYGEN Runtime Core* and MonarcoDrv must be installed and running on target 
device to run the example

## Timing of the project ##
The algorithm runs each 20 milliseconds (0.02 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 2 = 0.02 s

## Running the examples ##
- The **exec.mdl* file is the project main file. Open with *REXYGEN Studio*.
- Compile and download project to the target device.
- Switch to Watch mode and change the PWM frequency (1 Hz to 100000 Hz) and 
duty cycle (0.0 to 1.0) in real-time.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Monarco HAT](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [Monarco HAT website](http://www.monarco.io).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
