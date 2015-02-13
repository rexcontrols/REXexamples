Weekly schedule 
===============
 
This folder contains the source files answering the question:

## How do I implement a weekly schedule (a.k.a. 7-day programmer) in the REX Control System? ##

In this solution, each day of week is represented by 48 binary variables so it it possible to create an arbitrary schedule with the granularity of 30 minutes. The general idea of this solution is based on representing the individual half-hours as bits of integer variables.  

The WSCH subsystem takes the system time, converts it to the said bit-representation and compares it to the schedule of the corresponding day. You are encouraged to inspect the inside of the subsystem to learn the details.  

The SILO blocks are used for saving the weekly schedule to a permanent-storage medium. 

### Web interface ###

In order to enable configuration of the weekly schedule in a web browser the user interface was developed using the RexHMI extension for Inkscape. The HMI source files and generated files are attached.

However, a limitiation (or a bug) has been discovered while preparing this example. If you want to modify the user interface in Inkscape, make sure to patch the RexHMI template which the Inkscape extension uses for exporting the HMI. 


## Documentation ##

- [Function blocks of the REX Control System](http://www.rexcontrols.com/media/HTML/DOC/ENGLISH/index.html)
- [A tutorial on using the RexHMI extension for Inkscape](http://www.rexcontrols.com/articles/graphical-hmi-for-pool-automation-project)

## Additional information ##

Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the REX Control System and advanced 
automation and control solutions.