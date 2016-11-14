Reading recipes for mortar mixing from MySQL database to REX control algorithm 
==============================================================================
 
This folder contains the source files for the demonstration project on 
browsing MySQL database in the REX Control System. Data exchange 
relies on ODBC. 

Example shows how to read a specific row in the MySQL table. User can set an ID
of a row and observe values stored in it. In this case, ratios of materials for
specific mortars and description will be stored. The SQL statement is stored in 
the **.rio* file, but everyone can make his own statement of course (see the 
documentation for details).  

The data is retrieved from the database each 5 seconds (see the **.rio* 
configuration file). 

The signals are recorded in the TRND block which allows displaying of the trends 
(graphs) in the *RexView* diagnostic tool. 

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
  CREATE TABLE `mortar` (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `sand` double,
    `cement` double,
    `lime` double,
    `water` double,
    `description` text,
    PRIMARY KEY (ID)
  );
  INSERT INTO mortar(sand, cement, lime, water, description) VALUES (1,0,0.059,300,'lime mortar');
  INSERT INTO mortar(sand, cement, lime, water, description) VALUES (1,0.071,0.143,300,'cement-lime mortar');
  INSERT INTO mortar(sand, cement, lime, water, description) VALUES (1,0.111,0.,300,'cement mortar');
  
  ``` 
- The credentials must be correctly defined in the **.rio* file. In 
Connection command, use *DRIVER=MySQL ODBC 5.3 ANSI Driver* for Windows target 
device or *DRIVER=MySQL* for Linux/Debian target device. Compare credentials with
database settings. 
 
## Running the example ##
- Edit manually the database access credentials in the **.rio* file.
- The **exec.mdl* file is the project main file.
- Open it with RexDraw, compile and download it to the target device.
- Switch to online mode and watch the algorithm (use Target->Monitor selection 
to display data).
- Choose the ID with CNI_ID block and observe the recipe for specific mortar mix. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [DbDrv - Database access driver](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/DbDrv/DbDrv_ENG.html)
- [Function blocks of the REX Control System](https://www.rexcontrols.com/media/2.50.1/doc/ENGLISH/MANUALS/BRef/BRef_ENG.html)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Any database can be used as long as the ODBC connector is available and 
installed on the target device. 
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced automation and 
control solutions using the REX Control System.