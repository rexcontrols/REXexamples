Plain project of REX
=======================================

The source files in this folder form a plain project. This is the bare minimum 
to start the development from.

The executive of the project contains one task, which should be filled with 
function blocks to achieve the desired functionality.

Additional tasks and human machine interface (HMI) can be added as needed. See
the other examples and documentation for reference.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Drag&drop function blocks from the block library. 
- Compile and download the project to the target device.
- Switch to Watch mode and observe the algorithm in real-time.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.