PIDU - Simple PID controller
============================

The source files illustrating the use of a simple PID controller in the REX 
Control System are located in this folder.

The PIDU function block allows bumpless switching of manual and automatic modes. 
Toggle the CNB_MAN constant to switch the mode. Change the CNR_sp constant in 
automatic mode or the CNR_hv constant in manual mode and observe the controller 
action (mv) and the process reaction (pv).

The controlled system is simulated by the MDL_PROCESS function block. Replace it
with I/O flags for real-world applications.

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.

## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays). There is also a WebWatch HMI generated
directly from *RexDraw*. Use the *RexView* tool to transfer the HMI
to the target device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [PIDU function block documentation](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/PIDU.html)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.