/*******************************************************
*                                                      *
*   REXLANG example - data exchange via UDP protocol   *
*                                                      *
*   Sender station                                     *
*                                                      *
*   (c) REX Controls, www.rexcontrols.com              *
*                                                      *
*******************************************************/

#define SENDER_IP    "192.168.1.100"
#define RECEIVER_IP  "192.168.1.200"
#define senderPort   4000
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
long hSendLoc;             //socket handle
long buffer[BUFFER_SIZE];  //buffer for incoming data
long dataCnt;              //number of bytes sent
long convData[2];          //array for data conversions

/* Function for conversion of decimal number (the val parameter) to 2 numbers 
of type long (i.e. 8 bytes) representing the number in the double format 
according to IEEE 754. Little-endian format is used. */
void DoubleAsLong(double val, long ares[])
{
	double rmax=pow(2.0,1022.0);
	long lexp=0, i;

	ares[0]=0; ares[1]=0;
	if(val<0)
	{
		ares[1]=0x80000000;
		val=-val;
	}
	if(val<1.0/rmax)
		return; //zero
	if(val>=1.0)
	{
		for(i=9;i>=0;--i)
		{
			rmax=pow(2.0,(double)(1<<i));
			if(val>=rmax)
			{
				val/=rmax;
				lexp+=(1<<i);
			}
		}
		ares[1] = ares[1] | ((1023+lexp)<<20);
	}
	else
	{
		for(i=9;i>=0;--i)
		{
			rmax=pow(2.0,(double)(-(1<<i)));
			if(val<2.0*rmax)
			{
				val/=rmax;
				lexp+=(1<<i);
			}
		}
		ares[1] = ares[1]|((1023-lexp)<<20);
	}
	
	val=(val-1.0)*((double)0x00100000);
	ares[1] = ares[1]|(i=(long)val);
	rmax=((val-i)*pow(2.0,32.0));
	ares[0] = rmax>0x7FFFFFFF? ((long)(rmax-0x7FFFFFFF))|0x80000000 : (long)rmax;  
}

/* Initialization of the REXLANG algorithm */
// the init procedure is executed once when the REXLANG function block initializes
int init(void)
{
  hSendLoc = -1;
	return 0;
}

/* The body of the REXLANG algorithm */
// the main procedure is executed once in each sampling period
long main(void)
{
  if (hSendLoc<0)
  {
    hSendLoc = OpenUDP(SENDER_IP,senderPort,RECEIVER_IP,receiverPort);  //opening UDP socket
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
    DoubleAsLong(signal2,convData);
    buffer[5] = convData[0] & 0xFF;
    buffer[6] = convData[0] >> 8 & 0xFF;
    buffer[7] = convData[0] >> 16 & 0xFF;
    buffer[8] = convData[0] >> 24 & 0xFF;
    buffer[9] = convData[1] & 0xFF;
    buffer[10] = convData[1] >> 8 & 0xFF;
    buffer[11] = convData[1] >> 16 & 0xFF;
    buffer[12] = convData[1] >> 24 & 0xFF;
    
    //signal 3 is of type double, therefore we convert it to 8 bytes
    DoubleAsLong(signal3,convData);
    buffer[13] = convData[0] & 0xFF;
    buffer[14] = convData[0] >> 8 & 0xFF;
    buffer[15] = convData[0] >> 16 & 0xFF;
    buffer[16] = convData[0] >> 24 & 0xFF;
    buffer[17] = convData[1] & 0xFF;
    buffer[18] = convData[1] >> 8 & 0xFF;
    buffer[19] = convData[1] >> 16 & 0xFF;
    buffer[20] = convData[1] >> 24 & 0xFF;
    
    //now all the data can be sent
    dataCnt = Send(hSendLoc,buffer,21); //send data, number of bytes = 21
  }  
  //publishing the UDP communication handle through output signal (for debugging)
  handle = hSendLoc;
  return 0;
}

/* Closing the REXLANG algorithm */
//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
	if(hSendLoc>=0) Close(hSendLoc);
  return 0;
}