PIDU - Split Range Control 
==========================

This folder contains the source files for the demonstration project on cooperation
of two valves controlled by one PID controller. Valves can be used for pipes flow
control and the process model (MDL_PROCESS block) can be an estimate of mass
dynamics.

The first valve is coarse and causes a huge changes of manipulated variable (mv).
The seccond - fine valve is dedicated to compensation small deviations caused
by noise. The fine valve is usually faster and more precise. Weight ratio of
both valves is defined in GAIN_FV and GAIN_CV blocks. The coarse valve makes 80%
and fine valve 20% from overall manipulated variable by default. 

Fine valve is linearly opened with the range of mv =  <0; 0.2>. At the value 
mv = 0.2 is the valve fully opened. The coarse valve is getting opened on 
mv = 0.2 and is fully opened on mv = 1. This behavior is defined in CNDR_FINE 
and CNDR_COARSE blocks.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl** file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Open trend diagnostic window for the block TRND_Split_Range.
- Change the set point (sp) to 3. The fine valve will reach the high saturation 
limit and the coarse valve will be used for control.   
- Change the set point to 1. The fine valve will be used for control and the 
coarse valve will be at the low saturation limit.
- Change the set point to 2. Both valves will be used for control.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [PIDU function block documentation](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/PIDU.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.4/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.