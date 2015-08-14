/*******************************************************
*                                                      *
*   REXLANG example - data exchange via UDP protocol   *
*                                                      *
*   (c) REX Controls, www.rexcontrols.com              *
*                                                      *
*******************************************************/

#define CON_UDP      64         //internal constant for UDP communication
#define RECEIVER_IP  0xC0A801C8 //192.168.1.200
#define SENDER_IP    0xC0A80164 //192.168.1.100
#define senderPort   4000
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
long hRecvLoc;             //socket handle
long buffer[BUFFER_SIZE];  //buffer for incoming data
long dataCnt;              //number of received bytes
long convData[2];          //array for data conversions

/* Function for conversion of 2 numbers of type Long representing a decimal 
number in the double format according to IEEE 754 to a decimal number. 
Little-endian format is used. */
double LongAsDouble(long val[])
{
	double lbase=((double)(val[1]&0xFFFFF))/((double)0x00100000)+(val[0]&0x7FFFFFFF)*pow(2.0,-52.0);
	long lexp=(val[1]>>20)&0x7FF;
	if(val[0]&0x80000000)
		lbase+=pow(2.0,-21.0);
	if(lexp==0)
		return 0.0;
	if(lexp==0x7FF)
	{	
    //deal with NaN and Inf here if necessary
		return 1.0e60; //substitute value
	}
	lbase=(lbase+1.0)*pow(2.0,(double)(lexp-1023));
	return (val[1]&0x80000000)!=0? -lbase : lbase;
}

/* Initialization of the REXLANG algorithm */
// the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
  hRecvLoc = -1;
  dataCnt = 0;
	return 0;
}

/* The body of REXLANG algorithm */
// the main procedure is executed once in each sampling period
long main(void)
{
  long i;
  if (hRecvLoc<0)
  {
    hRecvLoc = Open(CON_UDP,RECEIVER_IP,receiverPort,SENDER_IP,senderPort);  //opening UDP socket
  }
  else 
  {
    //receive the data
    dataCnt = Recv(hRecvLoc,buffer,BUFFER_SIZE); //receive data, max number of bytes = BUFFER_SIZE

    //the first signal is of type long, therefore 4 bytes
    signal0 = buffer[0] | buffer[1]<<8 | buffer[2]<<16 | buffer[3]<<24;
    dat0 = buffer[0];
    dat1 = buffer[1];
    dat2 = buffer[2];
    dat3 = buffer[3];
    
    //the second signal is binary, therefore 1 byte
    signal1 = buffer[4];
    
    //the third signal is of type double, therefore 8 bytes
    convData[0] = buffer[5] | buffer[6]<<8 | buffer[7]<<16 | buffer[8]<<24;
    convData[1] = buffer[9] | buffer[10]<<8 | buffer[11]<<16 | buffer[12]<<24;
    signal2 = LongAsDouble(convData);

    //the fourth signal is of type double, therefore 8 bytes
    convData[0] = buffer[13] | buffer[14]<<8 | buffer[15]<<16 | buffer[16]<<24;
    convData[1] = buffer[17] | buffer[18]<<8 | buffer[19]<<16 | buffer[20]<<24;
    signal3 = LongAsDouble(convData);
  }  
  //publishing the UDP communication handle through output signal (for debugging)
  handle = hRecvLoc;
  //and also the number of received bytes
  receivedBytes = dataCnt;
  return 0;
}

/* Closing the REXLANG algorithm */
//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
	if(hRecvLoc>=0) Close(hRecvLoc);
  return 0;
}