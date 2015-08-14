/************************************************************
*
* REXLANG - Using the MCP23S17 I/O expander via SPI
*
*************************************************************/

#define SPIDEV_FNAME 71 // SPI device is defined by the fname parameter of the REXLANG block (e.g. set it to /dev/spidev0.0 on the Raspberry Pi minicomputer)

//assigning inputs to variables, these variables are READ-ONLY
long input(3) digital_out; //the signal controlling the outputs is connected to input u3 of the REXLANG block
long output(10) digital_in; //the state of the input pins is published via output y10 of the REXLANG block 

//declaration of variables
long spi_bufTx[3]; //buffer for transmitting data
long spi_bufRx[3]; //buffer for receiving data
long spi_bus_handle;
long spi_opcode_write;
long spi_opcode_read;
long spi_write_count;
long spi_read_count;
long spi_ret_fun;

/* Initialization of the REXLANG algorithm */
// The init procedure is executed once when the REXLANG function block initializes.
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
	
    // Addressing the device
    spi_opcode_write = 0x40; // ( 0 | 1 | 0 | 0 | A2 | A1 | A0 | R/W ), write=0
    spi_opcode_read  = 0x41; // ( 0 | 1 | 0 | 0 | A2 | A1 | A0 | R/W ), read=1

    // !!!!!!!!!!!!!
    // By default, IOCON.BANK=0, therefore see Table 1-6 in the datasheet for register mapping
    //
    // Table 1-5, which confusingly appears sooner in the datasheet, displays register addresses 
    // for IOCON.BANK=1, which are significantly different 
    // !!!!!!!!!!!!!
    
    //Setting PORTA to output
    spi_bufTx[0] = spi_opcode_write;
    spi_bufTx[1] = 0x00; //register no. (IODIRA) 
    spi_bufTx[2] = 0x00; //IODIRA data, bitmask, 0=output, 1=input
    spi_write_count = 3;
    spi_read_count = 0;
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);

    //Setting PORTB to input
    spi_bufTx[0] = spi_opcode_write;
    spi_bufTx[1] = 0x01; //register no. (IODIRB) 
    spi_bufTx[2] = 0xFF; //IODIRB data, bitmask, 0=output, 1=input
    spi_write_count = 3;
    spi_read_count = 0;
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);

    //Enabling pull-up resistors on PORTB
    spi_bufTx[0] = spi_opcode_write;
    spi_bufTx[1] = 0x0D; //register no. (GPPUB) 
    spi_bufTx[2] = 0xFF; //GPPUB data, bitmask, 0=no pull-up, 1=pull-up enabled
    spi_write_count = 3;
    spi_read_count = 0;
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);

    return 0;
}

/* The body of the REXLANG algorithm */
// The main procedure is executed once in each sampling period
long main(void)
{
    //Controlling outputs
    spi_bufTx[0] = spi_opcode_write;
    spi_bufTx[1] = 0x12; //register no. (GPIOA)   
    spi_bufTx[2] = digital_out & 0xFF; //masking the data to control the outputs
    spi_write_count = 3;
    spi_read_count = 0;
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);

    //Reading inputs
    spi_bufTx[0] = spi_opcode_read;
    spi_bufTx[1] = 0x13; //register no. (GPIOB)   
    spi_write_count = 2;
    spi_read_count = 3; // we need to read 1 byte of response after the 2-byte command is sent, therefore 3 bytes in total, the first 2 bytes will be zero
    spi_ret_fun = SPI(spi_bus_handle, 0, spi_bufTx, spi_write_count, spi_bufRx, spi_read_count);
    digital_in = spi_bufRx[2]; //publishing the received data
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