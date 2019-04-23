LED snake on UniPi with EMO-R-8
===============================
 
The relays of UniPi expansion board EMO-R-8 are controlled to create an illusion of a "snake" moving 
from RELAY1 to RELAY8 and then cycle to RELAY1. The speed of movement is 
selected by the UniPi inputs I01 through I06. 

The BIS binary signal generators produce pulses at various frequencies. The 
UniPi inputs determine which of these signals is used to move the snake 
bit-by-bit.  

Note that this is only a demonstration algorithm. **If run for prolonged periods
it significantly reduces the lifetime of the relays!**. 

## Timing of the project ##

The algorithm runs each 5 milliseconds (0.005 s). See the EXEC function block,  
tick x ntick0 = 0.005 x 1 = 0.005 

## Prerequisites ##

- *REXYGEN Runtime Core* and RPiDrv modules must be installed and running on the Raspberry Pi.
- I2C bus must be enabled on the Raspberry Pi.

## Running the example ##

- The **exec.mdl* file is the project main file, open it with *REXYGEN Studio*.
- Compile and download the project to the target device.
- Activate one of the inputs to move the snake.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and UniPi board (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_UniPi_ENG.pdf)
- [RPiDrv - Raspberry Pi driver (including PiFace Digital, UniPi v1.1 Intellisys PIO)](https://www.rexygen.com/doc/PDF/ENGLISH/RPiDrv_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)

## Additional information ##

- More info about the UniPi board can be found at [unipi.technology](http://www.unipi.technology).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.