Send SMS via Twilio example
===========================

The source files located in this folder illustrate how to send SMS via Twilio service.

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 s

## Prerequisites ##
- *REXYGEN Runtime Core* must be installed and running on the target device.
- Registration (free) at https://www.twilio.com/ in order to get unique Account SID and Auth token.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Specify your unique Twilio Account SID into CNS_accountSID:scv.
- Fill in user(Twilio Account SID) and password (Twilio Auth token) parameters in HTTP2 function block.
- Change "To" and "From" phone numbers in CNS_to and CNS_from. The one provided in example are test phone numbers. These phone numbers should be in E.164 format and URL encoded (e.g.: https://www.urlencoder.org/)
- Compile and download it to the target device.
- Change MP_sendSMS:BSTATE to ON and check the displays in project.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Twilio SMS documentation](https://www.twilio.com/docs/sms)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.