Exporting data from REX control algorithm to MySQL database 
===========================================================

This folder contains the source files for the demonstration project on 
exporting data from the the REX Control System to MySQL database. Data exchange 
relies on ODBC. 

There are two signal generators and two user-defined values to store in the 
database. All the constants and parameters can be changed online while the 
algorithm is running. The data is stored in the database each 5 seconds. 

## Prerequisities ##

- RexCore and DbDrv modules must be installed and running on the target device.
- ODBC connector for MySQL database is installed on the target device.
- MySQL database server must be available and the credentials correctly defined 
in the **.rio* file.
- Database table called *sqltable* is assumed, as well as column names 
*temperature*, *valvepos*, *power* and *manual_mode*.

## Running the example ##
- Edit manually the database access credentials in the **.rio* file.
- The *_exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.

## Documentation ##

- [DbDrv - Database access driver](http://www.rexcontrols.com/media/DOC/ENGLISH/DbDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Any database can be used as long as the ODBC connector is available and 
installed on the target device. 
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced automation and 
control solutions using the REX Control System.


