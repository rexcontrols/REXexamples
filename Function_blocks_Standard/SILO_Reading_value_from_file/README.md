Reading value from a text file 
==============================

This folder contains the source files for the demonstration project on reading
values from a text file. This is useful for using external data as an input to 
the control algorithm.

The SILO block reads a single value from a text file. The filename is given by 
the fname parameter (*value.txt* in this example). The path is relative to the 
directory where the executive file *exec.rex* is located on the target device. It is /rex/data on Linux machines and C:\ProgramData\REX Controls\REX_active_version\RexCore on Windows machines as default). The SILO block can read the value 
continuously (CSF=on) or only when a trigger signal occurs (CSF=off).

Both SILO blocks read the data from the same file to demonstrate the two 
different modes. In real projects, you will most probably have one file for each
SILO block. You can use as many external files as needed.
 
## Timing of the project ##

The algorithm runs each 250 milliseconds (0.25 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 5 = 0.25 

## Prerequisities ##
- RexCore must be installed and running on the target device.
- A text file named *value.txt* must be present in the same directory as the 
executive file *exec.rex* (/rex/rexcore on Linux and C:\ProgramData\REX Controls\REX_active_version\RexCore on Windows machines as default). 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Select the SILO blocks and enable online monitoring (Target->Monitor selection).
- Change the value in the text file.
- Tick the BSTATE parameter of the MP_TRIGGER function block to generate a 
trigger for the SILO_triggered function block. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [SILO function block documentation](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/SILO.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.