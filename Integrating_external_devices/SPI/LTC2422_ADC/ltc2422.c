/************************************************************
*
* REXLANG - Reading the LTC2422 ADC via SPI
*
*************************************************************/

#define SPIDEV_FNAME 71 // SPI device is defined by the fname parameter of the REXLANG block (e.g. set it to /dev/spidev0.0 on the Raspberry Pi minicomputer)

long output(0) channel0; //measured value from ADC channel 0 is published via output y0 of the REXLANG block
long output(1) channel1; //measured value from ADC channel 1 is published via output y1 of the REXLANG block 

long spi_bufTx[3]; //buffer for transmitting data
long spi_bufRx[3]; //buffer for receiving data
long spi_bus_handle;
long spi_write_count;
long spi_read_count;
long spi_ret_fun;

long init(void)
{
  spi_bus_handle = Open(SPIDEV_FNAME); // open SPI device
    
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
  //reading the result of ADC conversion
    spi_write_count = 0;
    spi_read_count = 3;
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);

    if ((spi_bufRx[0] & 0x40) >> 6){ // ADC channel 1 
      channel1 = ( (spi_bufRx[0] & 0x0F) << 16 ) + ( spi_bufRx[1] << 8) + spi_bufRx[2]; 
    }
    else // ADC channel 0
    {
      channel0 = ( (spi_bufRx[0] & 0x0F) << 16 ) + ( spi_bufRx[1] << 8) + spi_bufRx[2];
    }  

  return 0;
}
