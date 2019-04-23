/*******************************************************
*                                                      *
*   REXLANG example - data exchange via UDP protocol   *
*                                                      *
*   Sender station                                     *
*                                                      *
*******************************************************/

#define RECEIVER_IP  "192.168.1.200"
#define receiverPort 4001
#define BUFFER_SIZE  50    //maximum number of bytes to send

//assigning inputs to variables, these variables are READ-ONLY
long input(0) signal0;     //integer number to send to the receiver
long input(1) signal1;     //integer number to send to the receiver
double input(2) signal2;   //real number to send to the receiver
double input(3) signal3;   //real number to send to the receiver

//assigning variables to outputs, these variables are WRITE-ONLY
long output(15) handle;    //handle of the UDP socket

//declaration of variables
long hCom;             //socket handle
long buffer[BUFFER_SIZE];  //buffer for incoming data
long dataCnt;              //number of bytes sent
long convData[2];          //array for data conversions

// * Initialization of the REXLANG algorithm *
// The init procedure is executed once when the REXLANG function block initializes.
long init(void)
{
  hCom = -1;
  return 0;
}

// * The body of REXLANG algorithm * 
// The main procedure is executed once in each sampling period.
long main(void)
{
  if (hCom<0)
  {
    hCom = OpenUDP(0, 0, RECEIVER_IP, receiverPort);  //opening UDP socket, syntax long OpenUDP(string localname, long lclPort, string remotename, long remPort)  
  }
  else 
  {
    //signal 0 is of type long, therefore 4 bytes of data
    buffer[0] = signal0 & 0xFF;
    buffer[1] = signal0 >> 8 & 0xFF;
    buffer[2] = signal0 >> 16 & 0xFF;
    buffer[3] = signal0 >> 24 & 0xFF;
    
    //signal 1 is just a binary signal, therefore 1 byte
    buffer[4] = signal1 & 0xFF;
    
    //signal 2 is of type double, therefore we convert it to 8 bytes
    double2buf(convData,signal2,1);
    copyarray(8,convData,0,buffer,5);
    
    //signal 3 is of type double, therefore we convert it to 8 bytes
    double2buf(convData,signal3,1);
    copyarray(8,convData,0,buffer,13);
    
    //now all the data can be sent
    dataCnt = Send(hCom,buffer,21); //send data, number of bytes = 21
  }  
  //publishing the UDP communication handle through output signal (for debugging)
  handle = hCom;
  return 0;
}

// * Closing the REXLANG algorithm * 
// The exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new application, etc.).
long exit(void)
{
	if(hCom>=0) Close(hCom);
  return 0;
}