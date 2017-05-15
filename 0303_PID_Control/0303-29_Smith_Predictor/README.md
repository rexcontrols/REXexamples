Smith predictor 
===============

The source files illustrating the use of a Smith predictor in the REX Control 
System are located in this folder.

The Smith predictor is a famous method, how to deal with a deadtime problem in 
control systems. The predictor is based on estimation of controlled process. If
it is possible to estimate parameters of the process, it is possible to predict
the process value on mathematical model without a deadtime and control the 
system according this information.

The PIDMA - PID controller with Moment Autotuner, which is implemented in REX
Control System, is able to estimate parameters of the process. User can set this
parameters into the Smith Predictor and autotune the PID controller according 
the information from the mathematical model.
 
## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- RexCore and AdvBlk modules must be installed and running on the target device.

## Running the example ##
- The **exec.mdl** file is the project main file.
- Open it with *RexDraw*.
- Check that the CNB_SMITH_ON is off and CNI_ips is equal to 3.
- Compile and download the project to the target device.
- Switch to online mode and watch the algorithm.
- Select the PIDMA block and enable online monitoring (Target->Watch Selection).
- Open trend diagnostic window for the block TRND_SMITH to observe trends.
- Tick the BSTATE parameter of the MP_TUNE to switch on the autotuning experiment.
- When the experiment is done, PIDMA:ite parameter is 0 and pk, pti, ptd are 
estimation of the static gain (pk), dead-time (pti) and time constant (ptd) of 
the system MDL_PROC.
- Change the CNR_sp to 0.5 and observe regulation process in trends.
- Change the CNR_sp back to 0.
- Open the Smith_Predictor subsystem and change the parameters of MDL_PDT and MDL_P0.
Set following parameters to both MDL blocks as: k0 = PIDMA:pk, tau1 = tau2 = PIDMA:ptd. 
Set parameter del = PIDMA:pti for MDL_PDT block and del = 0 for MDL_P0.
- Switch the CNB_SMITH_ON on.
- When signals are stable, tick the BSTATE parameter of the MP_TUNE again.
- When the tune experiment is done, change the CNR_sp back to 0.5 and observe the fastest regulation 
process in trends.

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