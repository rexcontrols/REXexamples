/*******************************************************
*                                                      *
*   REXLANG example - data exchange via UDP protocol   *
*                                                      *
*   Receiver station                                   *
*                                                      *
*******************************************************/

#define receiverPort 4001
#define BUFFER_SIZE  50    //maximum number of bytes to receive

//assigning variables to outputs, these variables are WRITE-ONLY
long output(0) signal0;    //integer number received from the sender
long output(1) signal1;    //integer number received from the sender
double output(2) signal2;  //real number received from the sender
double output(3) signal3;  //real number received from the sender
long output(14) receivedBytes; //number of received bytes
long output(15) handle;    //handle of the UDP socket

long output(10) dat0;      //the first byte of the received data
long output(11) dat1;      //the second byte of the received data
long output(12) dat2;      //the third byte of the received data
long output(13) dat3;      //the fourth byte of the received data

//declaration of variables
long hCom;                 //communication socket handle
long buffer[BUFFER_SIZE];  //buffer for incoming data
long dataCnt;              //number of received bytes
long convData[2];          //array for data conversions

// * Initialization of the REXLANG algorithm *
// The init procedure is executed once when the REXLANG function block initializes.
long init(void)
{
  hCom = -1;
  dataCnt = 0;
  return 0;
}

// * The body of REXLANG algorithm * 
// The main procedure is executed once in each sampling period.
long main(void)
{
  if (hCom<0)
  {
    hCom = OpenUDP(0, receiverPort, 0, 0);  //opening UDP socket, syntax long OpenUDP(string localname, long lclPort, string remotename, long remPort)
  }
  else 
  {
    //receive the data
    dataCnt = Recv(hCom,buffer,BUFFER_SIZE); //receive data, max number of bytes = BUFFER_SIZE

    //the first signal is of type long, therefore 4 bytes
    signal0 = buffer[0] | buffer[1]<<8 | buffer[2]<<16 | buffer[3]<<24;
    dat0 = buffer[0];
    dat1 = buffer[1];
    dat2 = buffer[2];
    dat3 = buffer[3];
    
    //the second signal is binary, therefore 1 byte
    signal1 = buffer[4];
    
    //the third signal is of type double, therefore 8 bytes will be processed
    signal2 = buf2double(subarray(5,buffer),1);

    //the fourth signal is of type double, therefore 8 bytes will be processed
    signal3 = buf2double(subarray(13,buffer),1);
  }  
  //publishing the UDP communication handle through output signal (for debugging)
  handle = hCom;
  //and also the number of received bytes
  receivedBytes = dataCnt;
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