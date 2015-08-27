/************************************************************
*
* REXLANG - Using the EMO AO4/12 extension board (UniPi)
*
*************************************************************/

#define I2CDEV_FNAME 67 // I2C device is defined by the fname parameter of the REXLANG block (e.g. set it to /dev/i2c-1 on the Raspberry Pi minicomputer)
#define PWM_FREQUENCY 400 // 24 Hz .. 1526 Hz

//assigning inputs to variables, these variables are READ-ONLY
long input(0) ch0; //the signal controlling channel 0 (range 0-4095) is connected to input u0 of the REXLANG block
long input(1) ch1; //the signal controlling channel 1 (range 0-4095) is connected to input u1 of the REXLANG block
long input(2) ch2; //the signal controlling channel 2 (range 0-4095) is connected to input u2 of the REXLANG block
long input(3) ch3; //the signal controlling channel 3 (range 0-4095) is connected to input u3 of the REXLANG block
long input(4) ch4; //the signal controlling channel 4 (range 0-4095) is connected to input u4 of the REXLANG block
long input(5) ch5; //the signal controlling channel 5 (range 0-4095) is connected to input u5 of the REXLANG block

//declaration of variables
long i2c_bufTx[30]; //buffer for transmitting data
long i2c_bufRx[30]; //buffer for receiving data
long i2c_bus_handle;
long i2c_chip_address;
long i2c_write_count;
long i2c_read_count;
long i2c_ret_fun;
       
//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
  i2c_bus_handle = Open(I2CDEV_FNAME); // open I2C bus
  i2c_chip_address = 0x40; // 7-bit address of the I2C device

  i2c_write_count = 2;
  i2c_read_count = 0;
  i2c_bufTx[0] = 0x01; //register no. (MODE2)
  i2c_bufTx[1] = 0x04; //open-drain structure
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_write_count = 2;
  i2c_read_count = 0;
  i2c_bufTx[0] = 0x00; //register no. (MODE1)
  i2c_bufTx[1] = 0x11; //enable SLEEP
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
  
  i2c_write_count = 2;
  i2c_read_count = 0;
  i2c_bufTx[0] = 0xFE; //register no. (PRE_SCALE)
  i2c_bufTx[1] = (long)floor(25000000.0/4096/PWM_FREQUENCY); //prescale value
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
  
  i2c_write_count = 2;
  i2c_read_count = 0;
  i2c_bufTx[0] = 0x00; //register no. (MODE1)
  i2c_bufTx[1] = 0x01; //disable SLEEP
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_write_count = 2;
  i2c_read_count = 0;
  i2c_bufTx[0] = 0x00; //register no. (MODE1)
  i2c_bufTx[1] = 0xA1; //enable AI, reset chip
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  return 0;
}

//the main procedure is executed once in each sampling period
long main(void)
{
  i2c_read_count = 0;
  
  //Controlling only LEDn_OFF (LEDn_ON=0)

  i2c_bufTx[0] = 0x08;              //register no. (CH0_OFF)   
  i2c_bufTx[1] = ch0 & 0xFF;        //masking the data to control the outputs
  i2c_bufTx[2] = (ch0 >> 8) & 0x0F; //masking the data to control the outputs    
  i2c_write_count = 3;
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_bufTx[0] = 0x0C;              //register no. (CH1_OFF)   
  i2c_bufTx[1] = ch1 & 0xFF;        //masking the data to control the outputs
  i2c_bufTx[2] = (ch1 >> 8) & 0x0F; //masking the data to control the outputs    
  i2c_write_count = 3;
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_bufTx[0] = 0x10;              //register no. (CH2_OFF)   
  i2c_bufTx[1] = ch2 & 0xFF;        //masking the data to control the outputs
  i2c_bufTx[2] = (ch2 >> 8) & 0x0F; //masking the data to control the outputs    
  i2c_write_count = 3;
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_bufTx[0] = 0x14;              //register no. (CH3_OFF)   
  i2c_bufTx[1] = ch3 & 0xFF;        //masking the data to control the outputs
  i2c_bufTx[2] = (ch3 >> 8) & 0x0F; //masking the data to control the outputs    
  i2c_write_count = 3;
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_bufTx[0] = 0x18;              //register no. (CH4_OFF)   
  i2c_bufTx[1] = ch4 & 0xFF;        //masking the data to control the outputs
  i2c_bufTx[2] = (ch4 >> 8) & 0x0F; //masking the data to control the outputs    
  i2c_write_count = 3;
  i2c_ret_fun = I2C(i2c_bus_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);

  i2c_bufTx[0] = 0x1C;              //register no. (CH5_OFF)   
  i2c_bufTx[1] = ch5 & 0xFF;        //masking the data to control the outputs
  i2c_bufTx[2] = (ch5 >> 8) & 0x0F; //masking the data to control the outputs    
  i2c_write_count = 3;
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