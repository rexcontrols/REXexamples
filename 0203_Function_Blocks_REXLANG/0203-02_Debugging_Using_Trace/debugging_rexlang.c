/***************************************
*
* Debugging REXLANG code
*
****************************************/   

//assigning inputs to variables, these variables are READ-ONLY
bool input(0) IN_ERROR;
bool input(3) IN_WARNING;
bool input(6) IN_INFO;
bool input(9) IN_VERBOSE;
bool input(15) pulsesIn;

//assigning variables to outputs, these variables are WRITE-ONLY
string output(0) lastOperation;
long output(15) pulsesCnt;

//global variables
long pulses; // number of pulses
long lastValue; // last logged value

//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
  pulses = 0;
  return 0;
}

//the main procedure is executed once in each sampling period
long main(void)
{
  if (pulsesIn)
  {
    pulses = pulses + 1;
  }
  if (IN_ERROR) //manually generated error condition
  {
    TraceError(101, "This is an error message. Number of pulses: " + long2str(pulses,2));
    lastOperation = "Error message written to system log.";
    lastValue = pulses;
  }
  else if (IN_WARNING) //manually generated warning condition
  {
    TraceWarning(201, "This is a warning message. Number of pulses: " + long2str(pulses,2));
    lastOperation = "Warning message written to system log.";    
    lastValue = pulses;    
  }
  else if ( (pulses!=lastValue) && (fmod(pulses,15.0) < 0.01) ) //every 15th pulse is logged automatically
  {
    TraceWarning(200, "This is an automatic warning message. Number of pulses: " + long2str(pulses,2));
    TraceWarning(200, pulses); // This prints the value in both decimal and hexadecimal format
    lastOperation = "Warning message written to system log.";
    lastValue = pulses;    
  }
  else if (IN_INFO) //manually generated info condition
  {
    Trace(301, "This is an info message. Number of pulses: " + long2str(pulses,2));
    lastOperation = "Info message written to system log.";  
    lastValue = pulses;    
  }
  else if ( (pulses!=lastValue) && (fmod(pulses,7.0) < 0.01) ) //every 7th pulse is logged
  {
    Trace(300, "This is an automatic info message. Number of pulses: " + long2str(pulses,2));
    lastOperation = "Info message written to system log.";
    lastValue = pulses;    
  }
  else if (IN_VERBOSE) //manually generated verbose condition
  {
    TraceVerbose(401, "This is a verbose message. Number of pulses: " + long2str(pulses,2));
    lastOperation = "Verbose message written to system log.";    
    lastValue = pulses;    
  }
  else if ( (pulses!=lastValue) && (fmod(pulses,3.0) < 0.01) ) //every 3rd pulse is logged
  {
    TraceVerbose(400, "This is an automatic verbose message. Number of pulses: " + long2str(pulses,2));
    lastOperation = "Verbose message written to system log.";
    lastValue = pulses;    
  }
  pulsesCnt = pulses;
  return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
  return 0;
}