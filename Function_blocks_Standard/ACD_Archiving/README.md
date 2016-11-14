Archiving analog signals in the REX Control System
==================================================

This folder contains the source files for the demonstration project on archiving
analog signals.

The ACD block archives the analog value whenever a significant
change occurs. The significant change can be absolute (TR=off) or
relative to the signal trend (TR=on).

View the archived data in the *RexView* diagnostic tool. Enable the data markers 
to compare the data intensity of the two approaches. Note that the data is 
written to the archive each 15 seconds. If you need to flush the archive data 
sooner, trigger the archive flushing procedure by toggling the CNB_FLUSH
function block.

Remember to **change the archive flushing period in production systems**, 
especially when saving data to SD cards or compact flash disks. This can be done 
by adjusting the configuration parameters of the *analog_archive* (function 
block EXEC/ARC).

## Timing of the project ##

The algorithm runs each 50 milliseconds (0.05 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 1 = 0.05 

## Prerequisities ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Run *RexView*, connect to the target device, watch analog_archive.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [ACD function block documentation](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/ACD.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.