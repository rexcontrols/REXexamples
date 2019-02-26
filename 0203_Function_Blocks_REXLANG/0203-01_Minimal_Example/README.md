Minimal example for the REXLANG function block 
==============================================

This folder contains the source files demonstrating the use of the REXLANG 
user-programmable function block of REXYGEN.

The user algorithm sums the two input signals and also sums the values of two 
parameters. The results are published via two output signals. The algorithm 
itself is located in the *minimal_rexlang.c* file.

Feel free to modify the algorithm to perform your special calculations, there
are 16 inputs, 16 parameters and 16 outputs available. 

Read the
[complete description of the REXLANG function block](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/REXLANG.html)
for more details. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Select the TRND block and enable online monitoring (Target->Watch Selection).
- Observe the results.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [REXLANG function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/REXLANG.html)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- See also the examples on integrating external devices for additional examples
using the REXLANG function block
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.

