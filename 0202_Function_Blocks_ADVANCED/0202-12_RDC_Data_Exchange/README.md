Data exchange via the RDC function block 
========================================
 
This folder contains the source files for the demonstration project on data
exchange between two target devices of REX. The example is 
based on the RDC function block (Remote Data Connection), which requires a 
licence for advanced function blocks.

Station 1 is sending a sine wave (RDC_S1:u0), which is received by Station 2 
(RDC_S2:y0). The incoming data is looped back without any modification 
(RDC_S2:u2) and also with an offset (RDC_S2:u10). The loopback data is then 
received by station 1 (RDC_S1:y2 and RDC_S1:y10). 

The data exchange is set to 1 second (see the *period* parameter of the RDC 
block).

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the Watch mode of *RexDraw* or in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.1

## Prerequisites ##
- RexCore and AdvBlk modules must be installed and running on the target device.
- A valid licence for advanced function blocks is required.

## Running the example ##
- The **exec.mdl* files are the project main files.
- Open them with *RexDraw*, compile and download them to the target devices.
- Open trend diagnostic window for the block TRND in task for station 1.
- Observe the transmitted data.
- Change parameters of SG_SINE block in Station 1 or CNR block in Station2 and observe
the data again.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [RDC function block documentation](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/RDC.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.