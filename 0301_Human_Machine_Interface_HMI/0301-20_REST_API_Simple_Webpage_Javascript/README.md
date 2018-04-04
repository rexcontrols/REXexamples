Simple HMI example using REST API and plain Javascript
======================================================

The project task contains only one real constant block (CNR) and a rate limiter 
(RLIM). The CNR block can be controlled from a single-page HTML visualization 
using Javascript and REST API as a communication channel.

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisities ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Compile and download the project to the target device.
- Switch to Watch mode and observe the algorithm in real-time.
- Go to http://192.168.1.100:8008/hmi (use the IP address of your device!) and 
change the CNR value. Changing the value directly from *REXYGEN Studio* has the same 
effect.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.