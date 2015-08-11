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

Go to Modbus TCP Master driver (MTM block) configuration and press "Special 
edit" for Modbus configuration. Make sure to read the Modbus driver 
documentation (see below).

## Documentation ##

- [MbDrv - Modbus driver](http://www.rexcontrols.com/media/DOC/ENGLISH/MbDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Raspberry Pi is a trademark of the [Raspberry Pi Foundation](http://www.raspberrypi.org).
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.