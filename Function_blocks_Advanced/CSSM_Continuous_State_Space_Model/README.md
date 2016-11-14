CSSM - Simulation of discretized continuous state space models
==============================================================

The source files illustrating the use of a discretized continous state space 
models in the REX Control System are located in this folder.

The CSSM block (Continuous State Space Model) simulates behavior of a linear system.
Parameters of the system are automatically converted to the discrete state space 
model according to execution period of the task. Thanks to this feature, user
can simulate systems in task with slow execution period.

The CDELSSM block, which is present in the task too, allow to user set the time 
delay of the system and simulate more complex group of systems.

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 1 second (1.0 s) by default. See the EXEC function block,  
tick x ntick0 = 0.1 x 10 = 1.0 

## Prerequisities ##
- RexCore must be installed and running on the target device.
- License for advanced blocks library must be installed.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Change simulation task sampling period by changing the tick in the EXEC block.
- Set parameters of the simulated system tu the CSSM and SCELSSM blocks.
- Compile and download example to the target device.
- Switch to online mode and watch the algorithm.
- Open *RexView* and connect to target device.
- Select the TRND.
- See the results in the TRND block.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [CSSM function block documentation](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/CSSM.html)
- [CDELSSM function block documentation](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/CDELSSM.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.