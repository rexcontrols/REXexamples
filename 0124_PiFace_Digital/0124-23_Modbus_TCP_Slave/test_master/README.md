Modbus master for testing PiFace Digital as Modbus TCP slave 
============================================================
 
This example is a Modbus TCP master for testing the PiFace Digital as Modbus 
slave. The Modbus TCP slave device (Raspberry Pi with the PiFace Digital 
expansion board) is supposed to have the IP address 192.168.1.100.

## Modbus TCP slave setup ##
In this example the Modbus slave has 8 output coils at addresses 0 to 7 and 8 
input contacts at addresses 0 to 7. 

The Modbus master uses the commands FC05 (write single coil) or FC15 (write 
multiple coils) to manipulate the outputs (coils) and FC02 (read discrete 
inputs) to read the inputs. 

### Adding signals, changing Modbus register mapping, changing IP address of the slave device ###

Go to Modbus TCP Master driver (MTM block) configuration and press "Configure" 
for Modbus configuration. Make sure to read the Modbus driver documentation (see below).

## Documentation ##

- [MbDrv - Modbus driver](https://www.rexygen.com/doc/PDF/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
