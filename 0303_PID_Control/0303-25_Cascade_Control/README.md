Cascade Control 
===============

This folder contains the source files for the demonstration project on cascade 
control. Cascade control is used when measurement of process variable can be 
supported by the measurement of additional process variable with lower 
dead-time. For industrial application, the integral term wind up of PIDU_P and 
bumpless switching between MAN/AUT modes of PIDU_S must be handled.

The whole cascade control structure is stored in the CASC subsystem. The models
of processes are in the cascade_process task.

When CNB_CAS = 1 the primary (outer) PIDU_P controller generates setpoint for 
the secondary (inner) controller PIDU_S. Both controllers work in automatic mode 
and the cascade structure is ON. When switching to manual (MAN) mode both blocks 
PARR_hv and PARR_sp are switched to local tracking mode, hence the output of 
secondary controller PIDU_S will not change. In manual mode, the hand value can 
be changed as a local parameter of PARR_hv block. Moreover, the setpoint for 
primary controller is reset to pv by PARR_sp block. The internal state of PIDU_S 
is tracked to its mv. The internal state of PIDU_P is tracked to additional 
(secondary) process variable. This allows the bumpless switching of both 
controllers back to automatic mode. When switching CAS = OFF, the outer loop is 
bumpless opened and the inner control loop can be tuned. In such case the 
setpoint is changed in PARR_sp_S block. The state of primary controller PIDU_P 
is tracked to the secondary controller setpoint. This allows the bumpless 
closing of outer control loop.
 
## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Open trend diagnostic window for the block TRND_CASC.
- In RexDraw, select the CASC subsystem and look under mask (Ctrl+U).
- Turn on the CNB_MAN block and observe the bumpless switching between MAN/AUT modes.
- In MAN mode, change the hand value in PARR_hv block. The internal state of 
PIDU_P will be tracked to additional (secondary) process variable.
- Switch both controllers back to automatic mode (CNB_MAN = off).
- Switch the CNB_CAS off. The outer loop is bumplessly opened now and the inner
control loop can be tuned. In such case the setpoint is changed in PARR_sp_S block.
- The state of primary controller PIDU_P is tracked to the secondary controller 
setpoint and the outer control loop can be bumplessly closed again by CNB_CAS = on.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [PIDU function block documentation](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/PIDU.html)
- [PARR function block documentation](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/PARR.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.