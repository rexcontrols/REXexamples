Temperature data logger using DS18B20 1-Wire sensors 
====================================================
 
This folder contains the source files for the demonstration project on 
building a temperature logger with REXYGEN. 

This example can be used with any platform which supports 1-Wire bus (UniPi v1.1
Monarco HAT, Pigeon PLC, etc.). Four individual 1-Wire sensors (DS18B20) are 
assumed.

The measured temperatures are stored in the TRND blocks which allow displaying 
of the trends (graphs) in *REXYGEN Studio* or *REXYGEN Diagnostics*.

The data resides in RAM memory only. If you wish to archive it on a permanent 
storage medium, see e.g. example 0201-23. 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisites ##

- *REXYGEN Runtime Core* must be installed and running on the device.
- Owserver (part of the OWFS package) must be installed, correctly configured 
and running on the device.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with *REXYGEN Studio*.
- Specify the 64-bit ROM IDs of the attached temperature sensors. See the 1-Wire 
driver manual below for details.
- Compile and download the project to the target device.
- Switch to online mode and watch the algorithm. The displays show temperature 
in real time, time plots are available upon double-clicking the TRND blocks. 
- You can watch any signal in real time, just select a block and pick *Watch 
Selection* in context menu (right-click the block).

## User interface (HMI) ##
The example is accompanied by a HTML5-based user interface built on the WebBuDi 
framework (Web Buttons and Displays). There is also a WebWatch HMI generated
directly from *REXYGEN Studio*.

- Open web-browser and fill in the IP address of your target device and port 
8008 (e.g. 192.168.1.100:8008).
- Log in. Use the same credentials as for downloading the project (default 
login: admin, blank password).
   
## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and UniPi board (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_UniPi_ENG.pdf)
- [Getting started with REXYGEN and Monarco HAT (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [Getting started with REXYGEN and Pigeon PLC (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_Pigeon_PLC_ENG.pdf)
- [OwsDrv - 1-Wire driver](https://www.rexygen.com/doc/PDF/ENGLISH/OwsDrv_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)

## Additional information ##

- Visit the [Monarco HAT website](http://www.monarco.io).
- Visit the [Pigeon PLC website](http://pigeoncomputers.com/).
- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- 1-Wire is a trademark of [Maxim Integrated](http://www.maxim-ic.com).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.