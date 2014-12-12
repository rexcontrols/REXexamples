/************************************************************
*
* REXLANG - Reading data from MCP3422 AD converter via I2C
*
*************************************************************/

#define I2CDEV_FNAME 67 // I2C device is defined by the fname parameter of the REXLANG block (e.g. set it to /dev/i2c-1 on the Raspberry Pi minicomputer) )

long output(0) adc_value;

long i2c_bufTx[3];
long i2c_bufRx[3];
long i2c_port_handle;
long i2c_chip_address;
long i2c_register_address;
long i2c_write_count;
long i2c_read_count;
long i2c_ret_fun;

long init(void)
{
    i2c_port_handle = Open(I2CDEV_FNAME); // open I2C device
    return 0;
}

long main(void)
{
    i2c_chip_address = 0x68; // 7-bit address of the I2C device
    i2c_bufTx[0] = 0x98; // read channel 1, one-shot, 16bit, gain 1 (see MCP3422 datasheet)
    //i2c_bufTx[0] = 0x31; // read channel 2, continuous, 12bit, gain 2 (see MCP3422 datasheet)
    i2c_write_count = 1;
    i2c_read_count = 2;
    i2c_ret_fun = I2C(i2c_port_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
    adc_value = (i2c_bufRx[0]<<8) + i2c_bufRx[1];
   
    return 0;
}