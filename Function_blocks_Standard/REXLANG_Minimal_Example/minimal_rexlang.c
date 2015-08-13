/***************************************
*
* Minimal REXLANG example
*
****************************************/   

//assigning inputs to variables, these variables are READ-ONLY
double input(0) value1;
double input(3) value2;

//assigning parameters to variables, these variables are READ-ONLY
double parameter(0) value3;
double parameter(1) value4;

//assigning variables to outputs, these variables are WRITE-ONLY
double output(2) sum1;
double output(10) sum2;

//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
  return 0;
}

//the main procedure is executed once in each sampling period
long main(void)
{
  sum1 = value1 + value2;
  sum2 = value3 + value4;
  return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
  return 0;
}