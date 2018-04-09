/************************************************************
*
* REXLANG - Reading the MCP3202 ADC via SPI
*
*************************************************************/
string parameter(0) spi_dev;

long output(0) channel0; //measured value from ADC CH0 is published via output y0 of the REXLANG block
long output(1) channel1; //measured value from ADC CH1 is published via output y1 of the REXLANG block

long spi_bufTx[3]; //buffer for transmitting data
long spi_bufRx[3]; //buffer for receiving data
long adc_data[8]; //array for ADC data
long spi_bus_handle;
long spi_write_count;
long spi_read_count;
long spi_ret_fun;

long init(void)
{
  //spi_bus_handle = Open(SPIDEV_FNAME); // open SPI device for Rex 2.10.x
  spi_bus_handle = OpenSPI(spi_dev); // open and specify SPI device  
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

int main(void)
{
	long i;
	//reading the result of ADC conversion
	spi_write_count = 3;
	spi_read_count = 3;
	
	for (i=0;i<2;i++)
  {
    // preparing data to transmit (see table 6-1 in the datasheet) 
    spi_bufTx[0] = 0x01; //start bit
    spi_bufTx[1] = (1<<7)|(i<<6); //single-ended operation, channel selection (see table 5-1 in the datasheet)
    spi_bufTx[2] = 0;
    
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count); //SPI bus data exchange
    adc_data[i] = ((spi_bufRx[1] & 0x0F) << 8) | (spi_bufRx[2] & 0xFF);	//parsing ADC data
  }
     
  channel0 = adc_data[0]; 
  channel1 = adc_data[1]; 
	
  return 0;
}