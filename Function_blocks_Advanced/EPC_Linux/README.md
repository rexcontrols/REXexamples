EPC - Calling external programs 
===============================
 
This is an example on calling external programs on Linux machines. The 
example is based on the EPC function block, which requires a licence for 
advanced function blocks.

The first input (EPC:uVec1) receives sine, sawtooth and binary signals from 
generators. These data is sampled and stored in a temporary file. The data at 
the second input (EPC:uVec2) is not stored because the 2nd input is not in the 
*sl* list (parameter of the EPC block). You trigger the execution of the 
external program by the EXEC input. At that moment the captured data gets 
processed. Also the actual values at the second input get processed.  

In this example the executed command is  
/bin/bash /rex/data/epc_script.sh

The outputs of the EPC block display the results of the external script. 
The results can be static values or a sequence of data. In this example 
the first output displays static values and the second one displays a sequence 
of data. 

Remember that **frequent writes to SD cards or compact flash disks can corrupt 
your storage medium**. Consider using tmpfs (ramdisk) for working files of the 
EPC function block. You will need to define a symlink to e.g. /tmp or /run/tmp 
inside the /rex/data directory.

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 

## Prerequisites ##
- RexCore and AdvBlk modules must be installed and running on the target device.
- A valid licence for advanced function blocks is required.
- Copy the .sh file and the .csv files to /rex/data on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the VTOR blocks (Target->Monitor selection) and 
the EPC block.
- Change the BSTATE parameter of the MP_EXECUTE block and watch the outputs of 
the VTOR blocks.
- Inspect the working files of the EPC block in /rex/data/ on the target 
device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [EPC function block documentation](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/EPC.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.