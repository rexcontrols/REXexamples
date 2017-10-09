PIDU with PWM
=============

The source files illustrating the control of a process with binary On/Off 
actuator in REX are located in this folder. Process is 
controlled with a PID controller. Analog output from PID is converted into 
binary format with pulse-width modulation in the block PWM.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- RexCore must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Open trend diagnostic window for the block TRND_Loop for observing proces value,
manipulated variable and set point trends. You can choose the TRND_PWM for 
watching signals from PWM block too. 
- Change the set-point (CNR_sp) in range from 0 to 10.
- Observe the controller action (PIDU:mv) and the process reaction (MDL_PROCESS:y) 
in trend TRND_Loop and PWM action in TRND_PWM.
- Change the set-point (CNR_sp) in range from -10 to 0 and observe system behavior again.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [PIDU function block documentation](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/PIDU.html)
- [PWM function block documentation](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/PWM.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.