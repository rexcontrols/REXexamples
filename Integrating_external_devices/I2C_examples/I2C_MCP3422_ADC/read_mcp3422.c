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
    /* Address: 1 1 0 1 A2 A1 A0 */
    i2c_chip_address = 0x68; // 7-bit address of the I2C device
    
    /* Configuration register: 
       =====================================================================================
       | bit 7              | bit 6-5        | bit 4          | bit 3-2     | bit 1-0      |
       -------------------------------------------------------------------------------------
       | 1=start conversion | 00 = channel 1 | 1 = continuous | 00 = 12-bit | 00 = gain x1 |
       | 0=no effect        | 01 = channel 2 | 0 = one-shot   | 01 = 14-bit | 01 = gain x2 |
       |                    |                |                | 10 = 16-bit | 10 = gain x4 |
       |                    |                |                | 11 = 18-bit | 11 = gain 8x |
       =====================================================================================
    */
    i2c_bufTx[0] = 0x88; // read channel 1, one-shot, 16bit, gain 1 (see MCP3422 datasheet)
    //i2c_bufTx[0] = 0x31; // read channel 2, continuous, 12bit, gain 2 (see MCP3422 datasheet)

    i2c_write_count = 1;
    i2c_read_count = 2;
    i2c_ret_fun = I2C(i2c_port_handle, i2c_chip_address, i2c_bufTx, i2c_write_count, i2c_bufRx, i2c_read_count);
    adc_value = (i2c_bufRx[0]<<8) + i2c_bufRx[1];
   
    return 0;
}