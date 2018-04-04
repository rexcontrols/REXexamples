Reading vector data in Node-RED using the REST API
==================================================

The source files located in this folder illustrate how to read vector data from
REXYGEN to the Node-RED framework. REST API of the REXYGEN system is used.

There are 5 constants (CNR function blocks) in the REXYGEN algorithm. These are 
combined into a vector signal which is sent to the TRNDV block. The TRNDV block 
will serve as the source of data for the Node-RED flow.

The *VectorDataOverREST_flow.json* file contains a flow of nodes for the 
Node-RED framework. The node named *Get vector value over REST API* is set up to 
receive vector data from REXYGEN REST API.

The response is then parsed and signals are demultiplexed into individual 
outputs of the function block. A debug node is attached to each output to print 
the value of the signal into the debug terminal.

## Timing of the project ##
- The Node-RED flow is configured to runs each 3 seconds. Edit the *Clock* node 
in the flow for different timing options.

## Prerequisites ##
- Node.js and Node-RED must be installed and running on the target device 
(e.g.: Debian Jessie - *apt-get install nodered* will install all required 
packages).
- *REXYGEN Runtime Core* must be installed and running on the target device.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *REXYGEN Studio*.
- Compile and download it to the target device.
- Start node-red on the target and use web browser to navigate to the address of 
the Node-RED's webserver. The default address is http://127.0.0.1:1880/.
- Import the flow from VectorDataOverREST_flow.json. You can use either import 
from clipboard or you can copy the file to the */lib/flows* in your installation 
and then import the flow as a Library.
- Open the *Get vector value over REST API* node with HTTP GET request. Specify 
the target URL to request the data from. Remember to enable basic authentication 
and provide login and password for accessing the REXYGEN API (default is admin with 
blank password). 
- Deploy the flow. If everything is done correctly you should see the values 
from CNR function blocks in REXYGEN algorithm printed in the debug console of 
Node-RED.

## Documentation ##
- **Press F1 for help** on the selected function block in the *REXYGEN Studio*.
- [Node.js documentation](https://nodejs.org/en/docs/)
- [Node-RED documentation](http://nodered.org/docs/)
- [REXYGEN Studio User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenStudio_ENG.pdf)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##
- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.