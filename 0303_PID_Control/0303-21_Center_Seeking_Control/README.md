PIDU - Center Seeking Control 
=============================

This folder contains the source files for the demonstration project on cooperation
of two valves controlled by two PID controllers. Valves can be used for pipe flow
control and the process model (MDL_PROCESS block) can be an estimate of mass
dynamics.

The first valve is coarse and causes a huge changes of manipulated variable (mv).
The seccond - fine valve is dedicated to compensation of small deviations caused
by noise. The fine valve is usually faster and more precise. Weight ratio of
both valves is defined in GAIN_FV AND GAIN_CV blocks. The coarse valve makes 80%
and fine valve 20% from overall manipulated variable by default.

Optimal range of fine valve is defined by two relays with hysteresis RLY_1 and
RLY_2. When the valve is out of range, the coarse valve controller (PIDU_I) change
it's manipulated variable.

Small deviations of set-point and process value (e.g. caused by noise) are 
controlled only by fine valve, which is faster and more precise. This valve usually 
works in the half of operational range thanks to relay settings. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Note that the (fine) PIDU_I controller must be switched to reverse action 
mode, so RACT flag must be on.
- Open trend diagnostic window for the block TRND_Center.
- By default, the fine valve is in HI saturation (third signal in trend). 
Therefore the coarse valve is getting opened by the PIDU_I controller until the 
fine valve position input falls into the desired defined limits (45%-55% by 
default). 
- Then the PIDU_I controller is switched to manual mode.
- Change the setpoint (e.g. sp = 1).
- The fine valve is in LO saturation. Therefore the coarse valve is getting 
closed by the PIDU_I controller until the fine valve position input falls into 
the desired defined limits (45%-55% by default).
- Then the PIDU_I controller is switched to manual mode again.
- Try to change the setpoint by +- 0.2.
- Hence in steady operation the control actions are always done by fine valve 
which has usually much higher precision and speed.
- This is efficient for systems with a noise, because this small control actions
are done only by the fine valve. Moreover, the fine valve works close to the 
center of its range. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [PIDU function block documentation](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/PIDU.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.