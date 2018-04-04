Signal generators, trend in HMI
===============================

This folder contains the source files for the demonstration project on using
signal generators and displaying the signals in web HMI.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Connect to the HMI using your web browser, e.g. [http://192.168.1.100:8008](http://192.168.1.100:8008) 
(use the IP address of your target device!)

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [SG function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/SG.html)
- [BIS function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/BIS.html)
- [ANLS function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/ANLS.html)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
