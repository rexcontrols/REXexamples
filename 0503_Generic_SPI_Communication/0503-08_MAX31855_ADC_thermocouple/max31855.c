/************************************************************
*
* REXLANG - Reading the MAX31855 thermocouple ADC via SPI
*
*************************************************************/

//assigning parameters to variables
string parameter(0) spi_dev; // SPI device is defined by the p0 parameter of the REXLANG block (e.g. set it to /dev/spidev0.0 on the Raspberry Pi minicomputer)

//assigning outputs to variables, these variables are WRITE-ONLY
long output(0) thermocouple_data; //reading of the thermocouple is published via y0 output of the REXLANG block
long output(1) cold_junction_data; //reading of the internal cold-junction temperature is published via y1 output of the REXLANG block
long output(10) FAULT; //fault indicator
long output(11) SHORT_VCC; //short to Vcc indicator
long output(12) SHORT_GND; //short to GND indicator
long output(13) OPEN_CIRCUIT; //open circuit indicator

//declaration of variables
long spi_bufTx[4]; //buffer for transmitting data
long spi_bufRx[4]; //buffer for receiving data
long spi_bus_handle;
long spi_write_count;
long spi_read_count;
long spi_ret_fun;

/* Initialization of the REXLANG algorithm */
// The init procedure is executed once when the REXLANG function block initializes.
long init(void)
{
  spi_bus_handle = OpenSPI(spi_dev); // open SPI device
    
  // SPI data modes:
  //	SPI_MODE0 = 0,  // CPOL = 0, CPHA = 0, Clock idle low, data is clocked in on rising edge, output data (change) on falling edge
  //	SPI_MODE1 = 1,  // CPOL = 0, CPHA = 1, Clock idle low, data is clocked in on falling edge, output data (change) on rising edge
  //	SPI_MODE2 = 2,  // CPOL = 1, CPHA = 0, Clock idle high, data is clocked in on falling edge, output data (change) on rising edge
  //	SPI_MODE3 = 3,  // CPOL = 1, CPHA = 1, Clock idle high, data is clocked in on rising, edge output data (change) on falling edge

  spi_bufTx[0] = 0; //SPI data mode (0-3 mode, | 4=CS_HIGH | 8=LSB_FIRST | 16=3WIRE | 32=LOOP | 64=NO_CS | 128=READY)
  spi_bufTx[1] = 8; //bits per word
  spi_bufTx[2] = 1000000; //clock frequency [Hz]
  SetOptions(spi_bus_handle, spi_bufTx);

  // Verification of SPI bus settings
  GetOptions(spi_bus_handle, spi_bufRx);
  Trace(0, spi_bufRx[0]);  //	SPI mode
  Trace(1, spi_bufRx[1]);  //	bits per word
  Trace(2, spi_bufRx[2]);  //	clock frequency
    
	return 0;
}

/* The body of the REXLANG algorithm */
// The main procedure is executed once in each sampling period
long main(void)
{
  //reading the result of ADC conversion
    spi_write_count = 0;
    spi_read_count = 4;
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);

  //see the Memory map in the datasheet (Table 2)
    thermocouple_data = ( ((spi_bufRx[0]<<8) | (spi_bufRx[1])) << 16 ) >> 18; //long type is 32-bit, therefore the 14-bit data must be shifted left by 16 and shifted right by 18 
    FAULT = (spi_bufRx[1] & 0x01); //fault indicator
    cold_junction_data = ( ((spi_bufRx[2]<<8) | (spi_bufRx[3])) << 16 ) >> 20; //long type is 32-bit, therefore the 12-bit data must be shifted left by 16 and shifted right by 20
    SHORT_VCC = (spi_bufRx[3] & 0x04) >> 2; //short to Vcc
    SHORT_GND = (spi_bufRx[3] & 0x02) >> 1; //short to GND
    OPEN_CIRCUIT = (spi_bufRx[3] & 0x01); //open circuit

  return 0;
}

/* Closing the REXLANG algorithm */
// The exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.).
long exit(void)
{
  if(spi_bus_handle>=0) Close(spi_bus_handle); // close SPI bus
  return 0;
}
