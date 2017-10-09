Using subsystems
================

This example contains source files of a demonstration project, which is used 
for explaining the use of subsystems for hierarchical organization of algorithms.

## Prerequisites ##
- RexCore must be installed and running on the target device to run the example.

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 s

## Running the examples ##
- The **exec.mdl* file is the project main file. Open it with RexDraw.
- Study the individual subsystems, the first one is without a mask, the other one has it. The items in context menu will help here. 
- Compile and download the project to the target device.
- Switch to Watch mode and try changing the parameters of the individual subsystems. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.