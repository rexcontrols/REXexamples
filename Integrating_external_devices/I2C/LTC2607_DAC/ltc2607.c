/************************************************************
*
* REXLANG - Using the LTC2607 DAC via I2C
*
*************************************************************/

#define I2CDEV_FNAME 67 // I2C device is defined by the fname parameter of the REXLANG block (e.g. set it to /dev/i2c-1 on the Raspberry Pi minicomputer)

//assigning inputs to variables, these variables are READ-ONLY
long input(0) channelA; // input for controlling DAC channel A
long input(1) channelB; // input for controlling DAC channel B

//declaration of variables
long i2c_bufTx[3]; //buffer for transmitting data
long i2c_bufRx[3]; //buffer for receiving data
long i2c_bus_handle;
long i2c_chip_address; 
long i2c_write_count;
long i2c_read_count;
long i2c_ret_fun;

//the init procedure is executed once when the REXLANG function block initializes
int init(void)
{
  i2c_bus_handle = Open(I2CDEV_FNAME); // open I2C bus
  i2c_chip_address = 0x10; // 7-bit address of the I2C device

	return 0;
}

//the main procedure is executed once in each sampling period
int main(void)
{
  //Setting channel A
	i2c_bufTx[0] = 0x30; // Write to and update channel A (see Figure 3 and Table 2 in the datasheet)
	i2c_bufTx[1] = (channelA >> 8) & 0xFF; // channel A upper byte
	i2c_bufTx[2] = (channelA >> 0) & 0xFF; // channel A lower byte
  i2c_write_count = 3;
  i2c_read_count = 0;
	//Sending data via I2C
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

	//Setting channel B
  i2c_bufTx[0] = 0x31; // Write to and update channel B (see Figure 3 and Table 2 in the datasheet)
	i2c_bufTx[1] = (channelB >> 8) & 0xFF; // channel B upper byte
	i2c_bufTx[2] = (channelB >> 0) & 0xFF; // channel B lower byte
  i2c_write_count = 3;
  i2c_read_count = 0;
	//Sending data via I2C
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
    
  return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
  if(i2c_bus_handle>=0) Close(i2c_bus_handle); // close I2C bus
  return 0;
}