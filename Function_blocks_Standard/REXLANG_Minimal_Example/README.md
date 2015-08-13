Minimal example for the REXLANG function block 
==============================================

This folder contains the source files demonstrating the use of the REXLANG 
user-programmable function block of the REX Control System.

The user algorithm sums the two input signals and also sums the values of two 
parameters. The results are published via two output signals. The algorithm 
itself is located in the *minimal_rexlang.c* file.

Feel free to modify the algorithm to perform your special calculations, there
are 16 inputs, 16 parameters and 16 outputs available. 

Read the
[complete description of the REXLANG function block](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/REXLANG.html)
for more details. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Documentation ##

- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- See also the examples on integrating external devices for additional examples
using the REXLANG function block
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.

