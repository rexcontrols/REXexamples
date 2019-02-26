/************************************************************
*
* REXLANG - Reading the MCP3208 ADC via SPI
*
*************************************************************/

string parameter(0) spi_dev; // the SPI bus is defined by the p0 parameter of the REXLANG block

long output(0) channel0; //measured value from ADC CH0 is published via output y0 of the REXLANG block
long output(1) channel1; //measured value from ADC CH1 is published via output y1 of the REXLANG block
long output(2) channel2; //measured value from ADC CH2 is published via output y2 of the REXLANG block
long output(3) channel3; //measured value from ADC CH3 is published via output y3 of the REXLANG block
long output(4) channel4; //measured value from ADC CH4 is published via output y4 of the REXLANG block
long output(5) channel5; //measured value from ADC CH5 is published via output y5 of the REXLANG block
long output(6) channel6; //measured value from ADC CH6 is published via output y6 of the REXLANG block
long output(7) channel7; //measured value from ADC CH7 is published via output y7 of the REXLANG block

long spi_bufTx[3]; //buffer for transmitting data
long spi_bufRx[3]; //buffer for receiving data
long adc_data[8]; //array for ADC data
long spi_bus_handle;
long spi_write_count;
long spi_read_count;
long spi_ret_fun;

long init(void)
{
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
     
  for (i=0;i<8;i++)
  {
    // preparing data to transmit (see table 6-1 in the datasheet) 
    spi_bufTx[0] = 0x06 | ((i>>2) & 0x01); //start bit, single-ended operation, MSB of channel number
    spi_bufTx[1] = ((i<<6) & 0xFF); // two LSBs of channel number
    spi_bufTx[2] = 0;
    
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count); //SPI bus data exchange
    adc_data[i] = ((spi_bufRx[1] & 0x0F) << 8) | (spi_bufRx[2] & 0xFF);	//parsing ADC data
  }

  //publishing data via outputs of REXLANG block
	channel0 = adc_data[0]; 
  channel1 = adc_data[1];
  channel2 = adc_data[2];
  channel3 = adc_data[3];
  channel4 = adc_data[4];
  channel5 = adc_data[5];
  channel6 = adc_data[6];
  channel7 = adc_data[7];
 	
  return 0;
}