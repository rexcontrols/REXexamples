Week schedule with HMI
======================

The source files located in this folder integrates RexHMI with Week schedule function block (WSCH).
The schedule can be fully configured via web-based RexHMI. It is possible to enable/disable up to 4 switching moments
per day and specify the values to be switched.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Compile and download the project to the target device.
- Open web-browser and fill in the IP address of your target device with port 8008 (e.g. 192.168.1.100:8008).
- Log in. Use the same credentials as for downloading the project (default login: admin, blank password).
- Enable up to 4 switching moments per day and specify desired values.
- Bottom line will show next switching datetime and value.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Week schedule function block (WSCH)] (https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/WSCH.html)
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.