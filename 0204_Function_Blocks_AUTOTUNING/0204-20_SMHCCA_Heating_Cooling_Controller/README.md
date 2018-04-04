SMHCCA - Heating Cooling
========================

This folder contains the source files for the demonstration project on 
heating/cooling control with possibility of respecting asymetric heating/cooling 
processes. In the project, controller called SMHCCA was used. The SMHCCA is 
especially dedicated to heating/cooling control and it's greatest advantage is 
integrated autotuner.

The SMHCCA controller is suitable for system control with one or two binary 
inputs, when user requires hight robustness with lower control precision. 
The controller uses discrete sliding mode control. A unique feature of 
the SMHCCA controller is the possibility of automatic tune during the first 
approaching the setpoint value. This possibility can be turn on by setting inputs
TMODE=TAFF="on" (=1). The simultaneous procesess of approaching and controller 
tuning can be started by the pulse on input TUNE. Parameters of controller will
be autoset in the initial phase of approaching the setpoint value and controller
will be switched into automatic mode after that.
 
## Timing of the project ##

The algorithm runs each 100 milliseconds (0.01 s). See the EXEC function block,  
tick x ntick0 = 0.005 x 2 = 0.01 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.
- License for advanced blocks library must be installed.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Select the SMHCCA block and enable online monitoring (Target->Watch Selection).
- Tick the BSTATE parameter of the MP_TUNE to switch on the autotuning experiment.
- Open trend diagnostic window for the block TRND_sp_pv and observe the tuning 
progress. The process is slow, so it will take a while.
- After successful tuning, parameters of the regulator will be automatically set.
Parameters can be observed at p1-p6 outputs of the SMHCCA regulator.
- Try the automatic control with CNR_sp.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [SMHCCA function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/SMHCCA.html)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.