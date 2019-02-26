Modbus master for testing Monarco HAT as Modbus TCP slave 
=========================================================
 
This example is a Modbus TCP master for testing the Monarco HAT as Modbus slave. 
The Modbus TCP slave device (Raspberry Pi + Monarco HAT) is supposed to have 
the IP address 192.168.1.100.

## Modbus registers ##

### Monarco HAT input signals ###
| Register No. | Meaning                         | Data range |
| ------------:|:------------------------------- |:---------- |
|            0 | Digital inputs (LSB=DI1)        | 0..15      |
|            1 | Analog input 1 (0..10V, 12-bit) | 0..4095    |
|            2 | Analog input 2 (0..10V, 12-bit) | 0..4095    |

### Monarco HAT output signals ###
| Register No. | Meaning                          | Data range |
| ------------:|:-------------------------------- |:---------- |
|         2048 | Digital outputs (LSB=DO1)        | 0..15      |
|         2049 | Analog output 1 (0..10V, 12-bit) | 0..4095    |
|         2050 | Analog output 2 (0..10V, 12-bit) | 0..4095    |

### Adding signals, changing Modbus register mapping, changing IP address 
of the slave device ###

Go to Modbus TCP Master driver (MTM block) configuration and press "Configure" 
for Modbus configuration. Make sure to read the Modbus driver documentation 
(see below).

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Getting started with REXYGEN and Monarco HAT (Raspberry Pi)](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenGettingStarted_MonarcoHAT_RPi_ENG.pdf)
- [MonarcoDrv - Monarco HAT driver](https://www.rexygen.com/doc/PDF/ENGLISH/MonarcoDrv_ENG.pdf)
- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [Monarco HAT website](http://www.monarco.io).
- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.