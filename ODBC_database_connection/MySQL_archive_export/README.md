Exporting archive signals to database
=====================================

This folder contains the source files for the demonstration project on exporting 
archive data to database.

The ACD block archives the simulated temperature signal whenever a significant
change occurs. The significant change can be absolute (TR=off, ID=2) or relative 
to the temperature trend (TR=on, ID=1). 

View the archived data in the *RexView* diagnostic tool. Enable the data markers 
to compare the data intensity of the two approaches. The temperature is archived 

There are also alarms which are triggered when the temperature exceeds the upper 
(ID=50) or lower (ID=51) limit.

The data is stored in a RAM archive. From there it is exported to the database. 
You do not have to worry about the stability of the database connection. The RAM 
archive serves as a data buffer so all unexported data gets transferred once the 
connection with the database is renewed.

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1

The archive is exported in 10 second intervals. See the DB function block,
tick x factor = 0.05 x 200 = 10 

## Prerequisities ##

- RexCore and DbDrv modules must be installed and running on the target device.
- ODBC connector for MySQL database is installed on the target device.
- MySQL database server must be available and the credentials correctly defined 
in the **.rio* file.
- Database tables called *alarms_archive* and *temperature_archive* are assumed.

  ```sql
  CREATE TABLE `alarms_archive` (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `Time` datetime,
    `AlarmID` int(11),
    `Code` int(11),
    `Level` int(11),
    `Value` double,
    PRIMARY KEY (`ID`)
  );
  ```
  ```sql
  CREATE TABLE `temperature_archive` (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `GroupID` int(11),
    `Time` datetime,
    `temperature` double,
    PRIMARY KEY (`ID`)
  );
  ```

## Running the example ##
- Edit manually the database access credentials in the **.rio* file.
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*, compile and download it to the target device.

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [DbDrv - Database access driver](http://www.rexcontrols.com/media/DOC/ENGLISH/DbDrv_ENG.pdf)
- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##

- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.