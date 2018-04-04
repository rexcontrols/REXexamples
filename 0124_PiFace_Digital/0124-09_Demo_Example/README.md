Demonstration algorithm for PiFace Digital on Raspberry Pi 
==========================================================

This folder contains the source files for the demonstration project on using the 
REXYGEN and the Raspberry Pi minicomputer with 
the PiFace Digital extension board.

The four pushbuttons of the PiFace Digital are used for demonstration of simple 
algorithms in REXYGEN:

- The first push-button controls the first onboard relay directly. The signal 
just needs to be inverted due to the inverted logic of the inputs and outputs of 
the PiFace Digital board. 
- The second push-button toggles the state of the second onboard relay. Edges in 
the input signal are detected, which toggle the state of an RS flip-flop function 
block.
- The third push-button blinks the third output by feeding the binary signal 
generator into it.
- The fourth push-button triggers a timer, which activates the fourth output for 
a predefined period.

The timer can also get triggered by a "virtual button" (the MP_START function 
block).

The remaining outputs of PiFace Digital are controlled directly by user-defined 
Boolean constants. 

## Prerequisites ##

- *REXYGEN Runtime Core* and RPiDrv modules must be installed and running on the Raspberry Pi.
- SPI bus must be enabled on the Raspberry Pi.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with *REXYGEN Studio*.
- Compile and download the project to the target device.

## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays) of REXYGEN. Download it to 
the Raspberry Pi using the *REXYGEN Diagnostics* diagnostic tool.

## Documentation ##

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