Importing data from MySQL database to REX control algorithm 
===========================================================
 
This folder contains the source files for the demonstration project on 
importing data from MySQL database to REX. Data exchange 
relies on ODBC. 

There are five columns in the database table. The first contains a timestamp and the
others contains a values with following meaning: temperature, position of a valve,
power value and the manual mode indicator. These data are inserted into the 
database by an external application. 

The data is retrieved from the database each 5 seconds (see the **.rio* 
configuration file). 

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the Watch mode of *RexDraw* or in the *RexView* diagnostic tool. 

## Timing of the project ##

The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 10 = 0.5. 

The archive is exported in 5 second intervals. See the **.rio* file,
period = 5.

## Prerequisities ##

- RexCore and DbDrv modules must be installed and running on the target device.
- ODBC connector for MySQL database is installed on the target device. Install 
the *MySQL ODBC 5.3 ANSI Driver* for Windows target device. Install the 
*unixodbc* and *libmyodbc* packages for Linux/Debian target device.  
- MySQL database server must be available.
- Create the example database with the following code. If you change the database
name, user name or password, change it in the **.rio* file too.
  ```sql
  CREATE DATABASE dbname;
  USE dbname;
  CREATE USER 'dbuser' IDENTIFIED BY 'dbpassword';
  GRANT ALL PRIVILEGES ON dbname.* TO 'dbuser';
  FLUSH PRIVILEGES;
  CREATE TABLE `sqltable` (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `Time` datetime,
    `temperature` double,
    `valvepos` double,
    `power` double,
    `manual_mode` INT(11),
    PRIMARY KEY (ID)
  );
  INSERT INTO sqltable(Time, temperature, valvepos, power, manual_mode) VALUES (NOW(),23,0.8,5,0);
  ``` 
- The credentials must be correctly defined in the **.rio* file. In 
Connection command, use *DRIVER=MySQL ODBC 5.3 ANSI Driver* for Windows target 
device or *DRIVER=MySQL* for Linux/Debian target device. Compare credentials with
database settings. 
 
## Running the example ##
- Edit manually the database access credentials in the **.rio* file.
- The **exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.
- Switch to online mode and watch the algorithm (use Target->Watch Selection 
to display data).
- Add manually some data to database, e.g.
  ```sql
  USE dbname;
  INSERT INTO sqltable(Time, temperature, valvepos, power, manual_mode) VALUES (NOW(),20,0.5,3,1);
  ```   
- Observe new data in the algorithm.   

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [DbDrv - Database access driver](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/DbDrv/DbDrv_ENG.html)
- [Function blocks of REX](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Any database can be used as long as the ODBC connector is available and 
installed on the target device. 
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced automation and 
control solutions using REX.