/************************************************************
*
* REXLANG - Using the MCP23017 I/O expander via I2C
*
*************************************************************/

string parameter(0) i2c_dev;

//assigning inputs to variables, these variables are READ-ONLY
long input(3) digital_out; //the signal controlling the outputs is connected to input u3 of the REXLANG block
long output(10) digital_in; //the state of the input pins is published via output y10 of the REXLANG block 

//declaration of variables
long i2c_bufTx[3]; //buffer for transmitting data
long i2c_bufRx[3]; //buffer for receiving data
long i2c_bus_handle;
long i2c_chip_address;
long i2c_write_count;
long i2c_read_count;
long i2c_ret_fun;

//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
    i2c_bus_handle = OpenI2C(i2c_dev); // open I2C bus
    i2c_chip_address = 0x20; // 7-bit address of the I2C device

    // !!!!!!!!!!!!!
    // By default, IOCON.BANK=0, therefore see Table 1-6 in the datasheet for register mapping
    //
    // Table 1-5, which confusingly appears sooner in the datasheet, displays register addresses 
    // for IOCON.BANK=1, which are significantly different 
    // !!!!!!!!!!!!!
    
    //Setting PORTA to output
    i2c_bufTx[0] = 0x00; //register no. (IODIRA) 
    i2c_bufTx[1] = 0x00; //IODIRA data, bitmask, 0=output, 1=input
    i2c_write_count = 2;
    i2c_read_count = 0;
    i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

    //Setting PORTB to input
    i2c_bufTx[0] = 0x01; //register no. (IODIRB) 
    i2c_bufTx[1] = 0xFF; //IODIRB data, bitmask, 0=output, 1=input
    i2c_write_count = 2;
    i2c_read_count = 0;
    i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

    //Enabling pull-up resistors on PORTB
    i2c_bufTx[0] = 0x0D; //register no. (GPPUB) 
    i2c_bufTx[1] = 0xFF; //GPPUB data, bitmask, 0=no pull-up, 1=pull-up enabled
    i2c_write_count = 2;
    i2c_read_count = 0;
    i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

    return 0;
}

//the main procedure is executed once in each sampling period
long main(void)
{
    //Controlling outputs
    i2c_bufTx[0] = 0x12; //register no. (GPIOA)   
    i2c_bufTx[1] = digital_out & 0xFF; //masking the data to control the outputs
    i2c_write_count = 2;
    i2c_read_count = 0;
    i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
    
    //Reading inputs
    i2c_bufTx[0] = 0x13; //register no. (GPIOB)   
    i2c_write_count = 1;
    i2c_read_count = 1;
    i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
    digital_in = i2c_bufRx[0]; //publishing the received data

    return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
  if(i2c_bus_handle>=0) Close(i2c_bus_handle); // close I2C bus
  return 0;
}