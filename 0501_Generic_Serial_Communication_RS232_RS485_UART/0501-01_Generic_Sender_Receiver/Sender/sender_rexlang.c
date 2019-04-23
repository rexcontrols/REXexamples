/*******************************************************
*                                                      *
*   REXLANG example - data exchange via serial line    *
*                                                      *
*   Sender station                                     *
*                                                      *
*******************************************************/

#define COM_BAUDRATE 57600 //baudrate, e.g. 9600, 19200, 57600, 115200

#define COM_PARITY_NONE 0  //no parity
#define COM_PARITY_ODD  1  //odd parity
#define COM_PARITY_EVEN 2  //even parity

#define BUFFER_SIZE  50    //maximum number of bytes to send

//assigning parameters to variables, these variables are READ-ONLY
string parameter(0) serialdevice; // serial device is defined by the p0 parameter of the REXLANG block (e.g. /dev/ttyS0 in Linux or COM1 in Windows)

//assigning inputs to variables, these variables are READ-ONLY
long input(0) signal0;     //integer number to send to the receiver
long input(1) signal1;     //integer number to send to the receiver
double input(2) signal2;   //real number to send to the receiver
double input(3) signal3;   //real number to send to the receiver

//assigning variables to outputs, these variables are WRITE-ONLY
long output(15) handle;    //handle of the serial device

//declaration of variables
long hCom;                 //communication handle
long buffer[BUFFER_SIZE];  //buffer for incoming data
long dataCnt;              //number of bytes sent
long convData[8];          //array for data conversions

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
    hCom = OpenCom(serialdevice,COM_BAUDRATE,COM_PARITY_NONE);  //opening serial device
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
  //publishing the serial communication handle through output signal (for debugging)
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