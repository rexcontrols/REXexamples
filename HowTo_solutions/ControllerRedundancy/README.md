Controller redundancy 
=====================
 
This folder contains the source files for the very basic implementation of
controller redundancy with two target devices of the REX Control System. The 
example is based on the RDC function block (Remote Data Connection), which 
requires a licence for advanced function blocks.

There are 2 stations, each with its own output signals to control the plant. 
Station 1 is the "master" station. Station 2 is the "slave" or "backup" or 
"watchman" station. In Station 1, the analog output is controlled by the PARR 
function block, which is in LOCAL mode under normal conditions. You can change 
the *par* parameter manually to adjust the analog output.

The analog value is also sent through RDC_S1:u0 to Station 2 where it appears 
at RDC_S2:y0. It is routed to RAPP block, which is in REMOTE mode, unless the 
Station 1 fails. In the case of failure, there is no incoming data, the 
*fresh* output of the RDC block increases and after 5 seconds the PARR block 
is switched to local mode. Thus the Station 2 takes control. The switching 
is bumpless because the PARR_S2_AO function block "remembers" the last valid 
value. Again, you can change the analog value by hand.

The status of Station 2 is sent to Station 1 so that it knows whether it is in 
control or not. This is important for bringing the Master station back into 
operation without any bumps in the output signal.

You can simulate a failure by toggling the CNB_TEST:YCN value.

In order to put Station 1 back in command, you need to reset the SR_FAILURE 
flip-flop manually by toggling the MP_RESET:BSTATE parameter.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.1

The data exchange rate is set to 0.5 second (see the *period* parameter of the RDC 
block).

## Prerequisities ##
- RexCore and AdvBlk modules must be installed and running on both target 
  devices.
- A valid licence for advanced function blocks is required on both target 
  devices.

## Running the example ##
- The *station1_exec.mdl* and *station2_exec.mdl* files are the project main 
  files for individual stations.
- Open each of them with *RexDraw*.
- Compile and download the algorithm to the corresponding target device.
- Switch to online mode and watch the algorithm.
- Enable online monitoring of the PARR function blocks (Target->Monitor selection).
- Interrupt communication between the two stations or simulate a failure as 
  described above.  

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [RDC function block documentation](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/RDC.html)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.