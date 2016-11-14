Demonstration algorithm for PiFace Digital on Raspberry Pi 
==========================================================

This folder contains the source files for the traffic light project on using the 
REX Control System and the Raspberry Pi minicomputer with 
the PiFace Digital extension board. This project is dedicated for the advanced users.

In the Example_RPI_Xroad_task.ATMT.png you'll find the logic for traffic lights of a typical
European crossroad (one main road and one side road). It controls the
traffic automatically based on fixed time intervals and it allows
switching to manual mode, in which the user can define the winning road.
The example is prepared for PiFace Digital, the LEDs and buttons are
very convenient.
 
There are 8 possible states (Qn) of the traffic lights:
Q0 - crossroad not controlled - flashing yellow
Q1 - both red
Q2 - red+yellow main road
Q3 - green main road
etc.
And there are also conditions (Cn) which define the transitions between
the states. Both the states and conditions are depicted in the attached
SFC scheme.
 
The logic is based on the ATMT block, which implements the SFC
algorithm. All the states have a timeout defined and the transition
conditions are based mainly on these timeouts. The RS flip-flop block
defines which road is winning.
 
Turning the individual lightbulbs on and off is then quite easy, it
consists of a mere mapping of the lightbulbs to the individual states
(e.g. green for side road is on only in the Q7 state, red for main road
is on in all states except Q0, Q3 and Q4, etc.).
 
There are no timeouts for the green lights in manual mode.
Using the button PFI1 (S2 on the PiFace) you can set the RS_SIDE_ROAD function block and with PFI0 (S1) you can reset it, but only when the crossroad control is in manual mode (CNB_AUTO=off).
If you have a look at the ATMT state machine in the attachment, you will see that the conditions C1 and C5, which the RS block directly influences, decide which branch the state machine will follow when leaving the Q1 state. If the RS block is set, its Q output is true, the C5 condition is fulfilled and the state machine goes to states Q6 and Q7, which sets green for the side road.
In automatic mode, the setting and resetting of this RS block is based on timeouts of the individual states Q0 to Q7 and happens automatically.

## Prerequisites ##

- RexCore and RPiDrv modules must be installed and running on the Raspberry Pi.
- SPI bus must be enabled on the Raspberry Pi.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with RexDraw.
- Compile and download the project to the target device.

## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays) of the REX Control System. Download it to 
the Raspberry Pi using the RexView diagnostic tool.

## Documentation ##

- [Getting started with REX and Raspberry Pi](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/RexGettingStarted/RexGettingStarted_RasPi_ENG.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.