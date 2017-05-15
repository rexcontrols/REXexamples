/***************************************
*
* REXLANG example - Logging to text file
*
****************************************/

//assigning inputs to variables, these variables are READ-ONLY
long input(0) year;
long input(1) month;
long input(2) day;
long input(3) hour;
long input(4) minute;
long input(5) second;
double input(10) temperature;
long input(15) TRIGGER;

//assigning variables to outputs, these variables are WRITE-ONLY
long output(15) writeresult;

//variables declaration
long filehandle;

//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
	long i;
	string s[1024];

	i = 1;
	s = "";
	//first open the file and reach its end
	filehandle = OpenFile("rexlog.txt");
	if (filehandle > 0)
	{
		while (i > 0)
		{
			i = Read(filehandle, s, 50);
			Trace(100, i);
		}
	}
	return 0;
}

//the main procedure is executed once in each sampling period
long main(void)
{
	string logline[250];
	string s_month[20], s_day[20], s_hour[20], s_minute[20], s_second[20];

	if (TRIGGER)
	{
		s_month = long2str(month);
		if (strlen(s_month) == 1) s_month = "0" + s_month;
		s_day = long2str(day);
		if (strlen(s_day) == 1) s_day = "0" + s_day;
		s_hour = long2str(hour);
		if (strlen(s_hour) == 1) s_hour = "0" + s_hour;
		s_minute = long2str(minute);
		if (strlen(s_minute) == 1) s_minute = "0" + s_minute;
		s_second = long2str(second);
		if (strlen(s_second) == 1) s_second = "0" + s_second;

		logline = long2str(year) + "-" + s_month + "-" + s_day + " " + s_hour + ":" + s_minute + ":" + s_second + " Temperature is: " + double2str(temperature);
		Trace(123, "Writing to text file: " + logline);
		writeresult = Write(filehandle, logline + "\n");
	}
	return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
	if (filehandle > 0) Close(filehandle);
	return 0;
}