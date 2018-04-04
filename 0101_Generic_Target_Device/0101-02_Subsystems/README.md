Using subsystems
================

This example contains source files of a demonstration project, which is used 
for explaining the use of subsystems for hierarchical organization of algorithms.

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device to run the example.

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 s

## Running the examples ##
- The **exec.mdl* file is the project main file. Open it with *REXYGEN Studio*.
- Study the individual subsystems, the first one is without a mask, the other one has it. The items in context menu will help here. 
- Compile and download the project to the target device.
- Switch to Watch mode and try changing the parameters of the individual subsystems. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
