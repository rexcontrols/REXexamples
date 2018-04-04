Run music file from REXYGEN on Raspberry Pi
======================================================

This folder contains the source files for running a music file from REXYGEN System on a Linux target (incl. Raspberry PI).

## Prerequisites ##
- *REXYGEN Runtime Core* and Advanced function blocks must be installed and running on target 
device to run the example
- omxplayer installed (or any other mp3 player)
- Mp3 file stored on target device

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 s

## Running the examples ##
- The **exec.mdl* file is the project main file. Open with *REXYGEN Studio*.
- Edit EPC parameter "cmd" according to the absolute path of desired mp3 file.
- Compile and download project to the target device.

## Acknowledgement ##
Function block RTOV is used for correct running of EPC block. EPC is also able
to pass data to and from REXYGEN and therefore requires at least one
connected input vector.

## Documentation ##
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
