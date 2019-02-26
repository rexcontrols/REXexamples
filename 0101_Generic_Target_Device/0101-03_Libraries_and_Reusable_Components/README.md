User-defined libraries and reusable components
==============================================

This example demonstrates the use of user-defined libraries. The *mylibrary.mdl* 
file is the library the subsystems in the project refer to.

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device 
to run the example.

## Timing of the project ##
The algorithm runs each 100 milliseconds (0.1 s). See the EXEC function block,  
tick x ntick0 = 0.05 x 2 = 0.1 s

## Running the example ##
- The **exec.mdl* file is the project main file. Open it with *REXYGEN Studio*.
- Study the individual "My_amplifier" subsystems. The first two do not have a 
mask, the other two have it. The items in context menu will help you to get 
inside the subsystem.
- The subsystems without the mask cannot be directly modified at all.
- In the subsystems with a mask, you can change the parameters just like in any 
other function block. 
- To modify the internals of the subsystems, open the *myliblary.mdl* library, 
unlock it (*File->Unlock library*) and make changes as needed. Once you save the 
library, the changes will appear in all blocks referencing the library block.  
- Switch to Watch mode and observe the running algorithm. 

## Documentation ##

- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Function blocks of REXYGEN](https://www.rexygen.com/doc/PDF/ENGLISH/BRef_ENG.pdf)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
