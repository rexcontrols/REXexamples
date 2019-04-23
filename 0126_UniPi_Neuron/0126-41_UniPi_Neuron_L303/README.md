UniPi Neuron L303
=================

This example contains source files for a demonstration project on integration the UniPi Neuron L303 with REXYGEN. The project scope covers all major Neuron L303 functionality such as Digital/Analog Inputs/Outputs, Counters, PWM.

## Prerequisites ##

- *REXYGEN Runtime Core* and MbDrv module must be installed and running on the target device

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 s

## Running the example ##
- The **myproject_exec.mdl* file is the project main file. Open it with *REXYGEN Studio*.
- Compile and download the project to the target device.
- Observe the Inputs and set the Outputs

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and UniPi Neuron](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_Neuron_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [UniPi Knowledge Base](https://kb.unipi.technology/)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- More info about the UniPi Neuron can be found at [unipi.technology](http://www.unipi.technology).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.