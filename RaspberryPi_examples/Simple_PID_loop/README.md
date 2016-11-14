Simple PID loop on Raspberry Pi
===============================

The source files illustrating the use of a simple PID controller on Raspberry Pi 
in the REX Control System are located in this folder.

The PIDU function block allows bumpless switching of manual and automatic modes. 
Toggle the CNB_MAN constant to switch the mode. Change the CNR_sp constant in 
automatic mode or the CNR_hv constant in manual mode and observe the controller 
action (mv) and the process reaction (pv).

In this example, the controlled system is a box. A process value is the temperature and it
is measured by 1-Wire DS18B20 sensor. The actuator can be a heater controlled 
with PWM.

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.1 

## Prerequisites ##
- RexCore, RPiDrv and OwsDrv modules must be installed and running on the target 
  device (Raspberry Pi).
- Owserver (part of the OWFS package) must be installed, correctly configured 
  and running on the Raspberry Pi.
- The wiring must comply with the attached schematics. 

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify the 64-bit ROM ID of the attached temperature sensor. See the 1-Wire 
  driver manual below.
- Compile and download it to the target device.
- Switch to online mode and watch the algorithm (use Target->Monitor selection 
  to display data).
- Open *RexView* and connect to target device.
- Select the TRND.
- Change the set-point (CNR_sp) in automathic or hand-value (CNR_hv) in manual 
mode to 3.
- Observe the controller action (PIDU:mv) and the process reaction (OWS__temperature) in trend.

## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays). There is also a WebWatch HMI generated
directly from *RexDraw*. Use the *RexView* tool to transfer the HMI
to the target device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_RasPi_ENG.html)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi, Intellisys PIO)](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/RPiDrv/RPiDrv_ENG.html)
- [OwsDrv - 1-Wire driver](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/OwsDrv/OwsDrv_ENG.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.