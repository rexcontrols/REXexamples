Monitoring Siemens LOGO! with REXYGEN
====================================================

This folder contains the source files for the demonstration project on monitoring
Siemens LOGO! 0BA8 using the REXYGEN control algorithm.

Run your own project in the LOGO! device. Any algorithm can be monitored and visualized. The 
LOGO! acts as a server. See the example project *logo_monitoring.lsc*.

There is also a project for REXYGEN, which illustrates the access
to Inputs (I, AI), Outputs (Q) and Variable Memory Table (V) from the control 
algorithm. REXYGEN acts as a client and connects to the LOGO! base module via Ethernet.

Analog inputs of the LOGO! are read and stored in the TRND block in the REXYGEN 
control algorithm, which provides a time-plot of the measured data in real-time.

## Prerequisities ##
- *REXYGEN Runtime Core* and S7Drv modules are installed on the target device
- The LOGO! device is in RUN mode (*logo_monitoring.lsc* attached)
- The IP address 192.168.1.111 is assumed in the LOGO! device. If the IP address 
differs, **remember to change it** in the configuration dialog of the IO driver file according to your
LOGO! base module. As was already mentioned, LOGO! acts as a server the clients 
connect to. 

## Timing of the project ##
- The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.01 x 10 = 0.1 s
- Communication with Siemens LOGO! is performed each 50 milliseconds 
(0.05 s). See the S7C function block,
tick x factor = 0.01 x 5 = 0.05 s

## Running the example ##
- The **exec.mdl* file is the project main file
- Open it with *REXYGEN Studio*, compile and download it to the target device

## User interface (HMI) ##
The example is accompanied by a graphical user interface generated from *REXYGEN HMI Designer*.

## Documentation ##

- [S7Drv - S7 communication driver](https://www.rexygen.com/doc/PDF/ENGLISH/S7Drv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Siemens and LOGO! are trademarks of [Siemens AG](http://www.siemens.com).
- The S7Drv driver of REXYGEN uses the [Snap7 communication suite](http://sourceforge.net/projects/snap7).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
