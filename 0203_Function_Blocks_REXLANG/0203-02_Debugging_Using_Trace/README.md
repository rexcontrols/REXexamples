Debugging REXLANG code using Trace() function 
=============================================

This example project illustrates how the user-defined code within the REXLANG 
function block can be debugged. The algorithm cannot be stopped, therefore the 
only possibility is to print debug messages to System log.

The algorithm counts pulses (rising edges) at the u15 input and writes messages 
to System log. The messages can contain both strings and numeric values. If an 
integer numeric value is written to System log, it is displayed in both decimal 
and hexadecimal format. It is also possible to manually force a message to be 
written.

Read the
[complete description of the REXLANG function block](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/REXLANG.html)
for more details. 

## Timing of the project ##

The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*, compile and download it to the target device.
- Switch to watch mode and observe the algorithm.
- Make sure to configure system log to display all types of messages. Go to menu
*Target -> Configure System Log* and tick all message types in the *Function 
block messages* section.
- Make sure that the *Logging* checkbox is ticked in the REXLANG block 
properties dialog.
- Display the system log. Go to menu *Target -> Show System Log*.
- Toggle manually the BSTATE parameter in any of the MP blocks to force a 
message to be written.
- Observe the messages appearing in the System log.

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [REXLANG function block documentation](https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/REXLANG.html)
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- See also the examples on integrating external devices for additional examples
using the REXLANG function block
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.

