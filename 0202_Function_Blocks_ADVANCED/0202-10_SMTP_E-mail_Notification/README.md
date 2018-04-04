Send e-mail - SMTP example
==========================

The source files located in this folder illustrate the use of the SMTP function 
block for sending e-mail messages from the algorithm.

The example shows how to send e-mail via a Gmail account. 

## Note ##
This example can be easily modified to any other e-mail provider supporting the 
SMTP protocol.

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 s

## Prerequisites ##
- *REXYGEN Runtime Core* and AdvBlk modules must be installed and running on the target device.
- Registration (free) at Gmail.com
- [Enable less secure apps access](https://www.google.com/settings/security/lesssecureapps) 
in security configuration of your Google account

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Specify your Gmail account details in the SMTP function block parameters 
"to", "from", "user", "password"
- Fill in e-mail subject to "CNS_Subject:scv" and e-mail body to "CNS_Body:scv".
- Compile and download it to the target device.
- Change CNB_TRIGGER_POST to ON and wait for the e-mail to arrive in your 
mailbox.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [SMTP function block documentation] (https://www.rexygen.com/doc/ENGLISH/MANUALS/BRef/SMTP.html)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.