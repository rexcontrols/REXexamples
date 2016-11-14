Remote gate opener example 
==========================

This folder contains the source files for the demonstration project on communication between two REX targets
via REST API.

The project simulates remote gate opening using two stations with REX control system. Station 1 changes
gate state in Station 2. Station 2 is responsible for actual gate opening (this demo project uses time
delay to simulate the gate opening process). As soon as the gate is opened, Station 2 sets constant in
Station 1 "CNB_OPENED" to confirm the gate state.

## Prerequisites ##
- RexCore must be installed and running on both target devices.
- Targets needs to be network accessible

## Running the example (same for both devices)##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Change the target device parameter in "EXEC" block according to your HW. PC-Linux is default.
- Change IP address in parameter "url" inside "HTTP" block according to your targets IP settings.
Watch out for cross referencing.
- Compile and download corresponding projects to the target devices.
- Change "CNB_GATE_S1:YCN" to "open the gate" and observe "CNB_OPENED" state.
(wait for time delay specified in the "Gate" subsystem in Station 2)

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Getting started with REX on the Raspberry Pi minicomputer](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_RasPi_ENG.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.
- [MikroElektronika] (http://www.mikroe.com/)