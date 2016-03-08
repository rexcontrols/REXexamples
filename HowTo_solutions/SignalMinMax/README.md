Obtaining minimum and maximum values of a signal 
================================================
 
This folder contains the source files answering the question:

## How do I obtain the high/low values of a signal in the REX Control System? ##

In this solution, a random input signal is generated to simulate real-world 
data. The SHLD function blocks are used for storing the maximum and minimum 
values. 

The REL_LT function block compares the input signal with the existing maximum 
(output of the SHLD_MAX function block in the previous cycle). If the value is 
lower than the maximum, the SETH input of the SHLD_MAX function block is TRUE 
and the block holds the last value. Note that this behavior of the SHLD function 
block is defined by the *mode* parameter.

In other words: If the input signal is lower than the previous value, the 
SHLD_MAX block is commanded by the REL_LT block to hold the previous value 
(maximum). When the incoming signal is greater than the maximum, it passes 
through the SHLD_MAX function block and sets the new maximum.

The same holds for the minimum, only "upside down".

The MP_RESET function block is meant for resetting the extremes. For one cycle 
(rising edge) it forces the incoming signal to pass through the SHLD function 
blocks which resets the minimum and maximum to the current value of the signal.

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the *RexView* diagnostic tool.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##

- RexCore module must be installed and running on the target device.

## Running the example ##

- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Compile and download the project to the target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the SHLD function blocks (Target->Monitor selection).
- Use the MP_RESET function block to manually reset the minimum and maximum 
  values.
- The time plot of the signals can be displayed in the *RexView* diagnostic 
program. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX and UniPi board (Raspberry Pi)](http://www.rexcontrols.com/media/DOC/ENGLISH/REX_Getting_Started_UniPi_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.