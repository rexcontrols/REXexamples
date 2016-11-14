Monitoring Siemens LOGO! with the REX Control System
====================================================

This folder contains the source files for the demonstration project on monitoring
Siemens LOGO! 0BA8 using the REX control algorithm.

Run your own project in the LOGO! device. Any algorithm can be monitored and visualized. The 
LOGO! acts as a server. See the example project *logo_monitoring.lsc*.

There is also a project for the REX Control System, which illustrates the access
to Inputs (I, AI), Outputs (Q) and Variable Memory Table (V) from the control 
algorithm. REX acts as a client and connects to the LOGO! base module via Ethernet.

Analog inputs of the LOGO! are read and stored in the TRND block in the REX 
control algorithm, which provides a time-plot of the measured data in real-time.

## Prerequisities ##
- RexCore and S7Drv modules are installed on the target device
- The LOGO! device is in RUN mode (*logo_monitoring.lsc* attached)
- The IP address 192.168.1.111 is assumed in the LOGO! device. If the IP address 
differs, **remember to change it** in the configuration dialog of the IO driver file according to your
LOGO! base module. As was already mentioned, LOGO! acts as a server the clients 
connect to. 

## Running the example ##
- The **exec.mdl* file is the project main file
- Open it with RexDraw, compile and download it to the target device

## User interface (HMI) ##
The example is accompanied by a graphical user interface generated from RexHMI Designer.

## Documentation ##

- [S7Drv - S7 communication driver](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/S7Drv/S7Drv_ENG.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Siemens and LOGO! are trademarks of [Siemens AG](http://www.siemens.com).
- The S7Drv driver of the REX Control System uses the [Snap7 communication suite](http://sourceforge.net/projects/snap7).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.
