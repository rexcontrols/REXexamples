PIDMA - PID controller with Moment Autotuner
============================================

The source files illustrating the use of a PID controller with Moment Autotuner in the REX 
Control System are located in this folder.

The block PIDMA extends the control function of the standard PID controller by 
the built in autotuning feature. Before start of the autotuner the operator have 
to reach the steady state of the process at a suitable working point (in manual 
or automatic mode) and specify the required type of the controller ittype (PI or 
PID) and other tuning parameters (iainf, DGC, tdg, tn, amp, dy and ispeed). The 
identification experiment is started by the input TUNE (input TBRK finishes the 
experiment). In this mode (TBSY = on), first of all the noise and possible 
drift gradient (DGC = on) are estimated during the user specified time (tdg+tn)
and then the rectangle pulse is applied to the input of the process and the 
first three process moments are identified from the pulse response. The 
amplitude of the pulse is set by the parameter amp. The pulse is finished when 
the process variable pv deviates from the steady value more than the dy 
threshold defines. The threshold is an absolute difference, therefore it is 
always a positive value. The duration of the tuning experiment depends on the 
dynamic behavior of the process. The remaining time to the end of the tuning is 
provided by the output trem.

The controlled system is simulated by the pid_autotuning_process task. Replace it
with I/O flags for real-world applications.

The signals are recorded in the TRND_PIDMA block which allows displaying of the trends 
(graphs) in the Watch mode of *RexDraw* or in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- RexCore must be installed and running on the target device.
- License for advanced blocks library must be installed.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Select the PIDMA block and enable online monitoring (Target->Watch Selection).
- Check that the CNB_MAN is off, try the automatic control with CNR_sp function block and watch the responses of the system with trends in RexView.
- After reaching the steady state of the process, tick the BSTATE parameter of the MP_TUNE to switch on the autotuning experiment.
- When the experiment is done, PIDMA:ite parameter is 0 and pk, pti, ptd,... parameters are set to optimal values.
- Try again the automatic control with CNR_sp.


## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays). There is also a WebWatch HMI generated
directly from *RexDraw*.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [PIDMA function block documentation](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/PIDMA.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.