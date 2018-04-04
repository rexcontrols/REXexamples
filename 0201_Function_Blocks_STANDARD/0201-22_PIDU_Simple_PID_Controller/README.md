PIDU - Simple PID Controller
============================

The source files illustrating the use of a simple PID controller in the REXYGEN 
Control System are located in this folder.

The PIDU function block allows bumpless switching of manual and automatic modes. 
Toggle the CNB_MAN constant to switch the mode. Change the CNR_sp constant in 
automatic mode or the CNR_hv constant in manual mode and observe the controller 
action (mv) and the process reaction (pv).

The controlled system is simulated by the MDL_PROCESS function block. Replace it
with I/O flags for real-world applications.

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the Watch mode of *REXYGEN Studio* or in the *REXYGEN Diagnostics* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Switch to online mode and watch the algorithm.
- Open trend diagnostic window for the block TRND_PIDU.
- Change the set-point (CNR_sp) in automathic or hand-value (CNR_hv) in manual 
mode to 3.
- Observe the controller action (PIDU:mv) and the process reaction (MDL_PROCESS:y) in trend.

## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays). There is also a WebWatch HMI generated
directly from *REXYGEN Studio*.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [PIDU function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/PIDU.html)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- See examples 0303-xx for advanced PID control schemes.
- See example 0204-10 demonstrating a PID controller with autotuning function.
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.