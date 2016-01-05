Importing data from MySQL database to REX control algorithm 
===========================================================

This folder contains the source files for the demonstration project on 
importing data from MySQL database to the REX Control System. Data exchange 
relies on ODBC. 

There are two columns in the database table, one contains a timestamp and the
other one contains a value (e.g. temperature). These data are inserted into the 
database by an external application. 

The data is retrieved from the database each 5 seconds (see the **.rio* 
configuration file). 

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5 

## Prerequisities ##

- RexCore and DbDrv modules must be installed and running on the target device.
- ODBC connector for MySQL database is installed on the target device.
- MySQL database server must be available and the credentials correctly defined 
in the **.rio* file.
- Database table called *sqltable* is assumed.
  ```sql
  CREATE TABLE `sqltable` (
    `time` timestamp,
    `value` double,
    PRIMARY KEY (`time`)
  );
  ```        
 
## Running the example ##
- Edit manually the database access credentials in the **.rio* file.
- The **exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.
- Switch to online mode and watch the algorithm (use Target->Monitor selection 
  to display data).

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [DbDrv - Database access driver](http://www.rexcontrols.com/media/DOC/ENGLISH/DbDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Any database can be used as long as the ODBC connector is available and 
installed on the target device. 
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced automation and 
control solutions using the REX Control System.


