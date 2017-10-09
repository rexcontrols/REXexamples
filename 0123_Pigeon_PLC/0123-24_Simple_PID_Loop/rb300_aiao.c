//assigning inputs to variables, these variables are READ-ONLY
long input(1) ao1; //value from u1 input, 0..1000 => 0 .. 10.0V
long input(2) ao2; //value from u2 input, 0..1000 => 0 .. 10.0V
//add inputs as needed

//assigning parameters to variables, these variables are READ-ONLY
string parameter(0) spi_dev; //the SPI bus is defined by the p0 parameter of the REXLANG block
//add parameters as needed

//assigning variables to outputs, these variables are WRITE-ONLY
double output(1) ai1; //value to publish via y1 output
double output(2) ai2; //value to publish via y2 output
double output(3) ai3; //value to publish via y3 output
double output(4) ai4; //value to publish via y4 output
//add output signals as needed

long spi_bufTx[50]; //buffer for transmitting data
long spi_bufRx[50]; //buffer for receiving data
long spi_bus_handle;
long spi_write_count;
long spi_read_count;
long spi_ret_fun;

//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
	spi_bus_handle = OpenSPI(spi_dev); // open SPI device
    
	// SPI data modes:
	//	SPI_MODE0 = 0,  // CPOL = 0, CPHA = 0, Clock idle low, data is clocked in on rising edge, output data (change) on falling edge
	//	SPI_MODE1 = 1,  // CPOL = 0, CPHA = 1, Clock idle low, data is clocked in on falling edge, output data (change) on rising edge
	//	SPI_MODE2 = 2,  // CPOL = 1, CPHA = 0, Clock idle high, data is clocked in on falling edge, output data (change) on rising edge
	//	SPI_MODE3 = 3,  // CPOL = 1, CPHA = 1, Clock idle high, data is clocked in on rising, edge output data (change) on falling edge

	spi_bufTx[0] = 1; //SPI data mode (0-3 mode, | 4=CS_HIGH | 8=LSB_FIRST | 16=3WIRE | 32=LOOP | 64=NO_CS | 128=READY)
	spi_bufTx[1] = 8; //bits per word
	spi_bufTx[2] = 1000000; //clock frequency [Hz]
	SetOptions(spi_bus_handle, spi_bufTx);

	// Verification of SPI bus settings
	GetOptions(spi_bus_handle, spi_bufRx);
	Trace(0, spi_bufRx[0]);  //	SPI mode
	Trace(1, spi_bufRx[1]);  //	bits per word
	Trace(2, spi_bufRx[2]);  //	clock frequency
	Trace(3, spi_bus_handle);  //	SPI handle
    
	return 0;
}

//the main procedure is executed repeatedly (once in each sampling period)
long main(void)
{
	long i;
	
	spi_write_count = 5;
	spi_read_count = 5;
	spi_bufTx[0] = 0x4F;
	spi_bufTx[1] = ao1 & 0xFF; //AO1 low byte
	spi_bufTx[2] = (ao1>>8) & 0xFF; //AO1 high byte
	spi_bufTx[3] = ao2 & 0xFF; //AO2 low byte
	spi_bufTx[4] = (ao2>>8) & 0xFF; //AO2 high byte
	spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count); //SPI bus data exchange

	spi_write_count = 1;
	spi_read_count = 1;
	spi_bufTx[0] = 0x41;
	spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count); //SPI bus data exchange
	
/*
for (i=0;i<spi_read_count;i++)
	{
		Trace(55,spi_bufRx[i]);	
	}
*/

	Sleep(0.0001); //sleep 100 us - REXLANG to asi neumi takhle kratky, ale jeden nikdy nevi...
	
spi_write_count = 1;
	spi_read_count = 8;
	spi_bufTx[0] = 0xFF;
	spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count); //SPI bus data exchange

	ai1 = (spi_bufRx[1]<<8 | spi_bufRx[0]) *10.065/1023;
	ai2 = (spi_bufRx[3]<<8 | spi_bufRx[2]) *10.065/1023;
	ai3 = (spi_bufRx[5]<<8 | spi_bufRx[4]) *10.065/1023;
	ai4 = (spi_bufRx[7]<<8 | spi_bufRx[6]) *10.065/1023;
	return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
	/* PUT YOUR CODE HERE */
	return 0;
}
