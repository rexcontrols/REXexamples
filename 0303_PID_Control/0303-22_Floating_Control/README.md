PIDU - Floating Control 
=======================

This folder contains the source files for the demonstration project on cooperation
two valves controlled by two PID controllers. Valves can be used for pipes flow
control and the process model (MDL_PROCESS block) can be an estimate of mass
dynamics.

The first valve is coarse and causes a huge changes of manipulated variable (mv).
The seccond - fine valve is dedicated to compensation small deviations caused
by noise. The fine valve is usually faster and more precise. Weight ratio of
both valves is defined in GAIN_FV AND GAIN_CV blocks. The coarse valve makes 80%
and fine valve 20% from overall manipulated variable by default. 

The coarse valve controller PIDU_I keep the fine valve controller PIDU_PV in 
the half of its range. When the manipulated variable of PIDU_I controller is in 
range mv = <0.25; 0.75>, the coarse valve will be at rest. For lower values will 
getting closed and for higher will getting opened. This behavior can be changed 
in CNDR block. Opening and closing coarse valve is caused by set point (sp) of PIDU_I 
controller change and its integration character.
 
## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Note that the PV of integrating controller PIDU_I is empty, thus zero constant.
- Open trend diagnostic window for the block TRND_Floating.
- Change the set point (sp) to 3, the fine valve will be in HI saturation (third signal in trend). 
Therefore the coarse valve is getting opened by the PIDU_I controller until the 
fine valve position input falls into the desired defined limits (25%-75% by 
default). 
- Then the set point of PIDU_I is set to 0.
- Change the set point PIDU_PV(e.g. sp = 1).
- The fine valve is in LO saturation. Therefore the coarse valve is getting 
closed by the PIDU_I controller until the fine valve position input falls into 
the desired defined limits (25%-75% by default).
- Then the setpoint of PIDU_I is set to 0 again.
- Try to change the set point PIDU_PV by +- 0.2.
- Hence in steady operation the control actions are always done by fine valve 
which has usually much higher precision and speed.
- This is efficient for systems with a noise, because this small control actions
are done only by the fine valve.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [PIDU function block documentation](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/PIDU.html)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
