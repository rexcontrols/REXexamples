*************************************************************
*  Visualization for the REX control algorithm using HTML5  *
*                                                           *
*            (c) REX Controls s.r.o.                        *
*                                                           *
*************************************************************

Make sure to download the corresponding control algorithm to the runtime 
executive of the REX Control System prior to displaying the HTML HMI in 
your browser. 

The Lighttpd and RexWsTcp servers must be running. 

Recommended browsers are Chrome or Firefox. IE is supported since version 10.

Troubleshooting
------------------------------
The Lighttpd webserver is bound to port 80 (8008 on Windows) by default. No 
other program can occupy this port, otherwise the server will not work. Either 
close known conflicting applications like Skype, TeamViewer, Apache (or other 
webservers) or change the default port of the Lighttpd server.

If the visualization is not working, check if the processes LIGHTTPD, REXWSTCP 
and REXCORE are present and running. Also check your firewall and add exceptions
for these 3 processes if necessary.