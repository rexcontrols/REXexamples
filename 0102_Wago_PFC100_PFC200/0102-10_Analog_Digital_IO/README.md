Wago PFC100/PFC200 assembly with analog an digital I/O
======================================================

This example illustrates the setup for a Wago PFC100/PFC200 assembly containing
both analog and digital I/O modules.

## Prerequisites ##
- *REXYGEN Runtime Core* and WagoDrv module must be installed and running on the target device 
to run the example
- The number and order of I/O modules must comply with the attached PNG file.

## Timing of the project ##
- The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.02 x 5 = 0.1 s
- Communication with I/O modules via Kbus is performed each 20 milliseconds 
(0.02 s). See the WG function block, 
tick x factor = 0.02 x 1 = 0.02 s

## Running the example ##
- The **exec.mdl* file is the project main file. Open it with *REXYGEN Studio*.
- Compile and download the project to the target device.
- Connect to the HMI using your web browser, e.g. [http://192.168.1.100:8008](http://192.168.1.100:8008) 
(use the IP address of your target device!)

## Documentation ##

- [Getting started with REXYGEN and WAGO PFC100/PFC200](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_Wago_PFC_ENG.pdf)
- [WagoDrv - Driver for WAGO PLC (PFC100 and PFC200)](https://www.rexygen.com/doc/PDF/ENGLISH/WagoDrv_ENG.pdf)
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
