//assigning inputs to variables, these variables are READ-ONLY
double input(0) firstinput; //value from u0 input
double input(1) secondinput; //value from u1 input
string input(2) thirdinput; //value from u2 input
//add inputs as needed

//assigning parameters to variables, these variables are READ-ONLY
double parameter(0) firstparameter; //parameter p0
double parameter(1) secondparameter; //parameter p1
//add parameters as needed

//assigning variables to outputs, these variables are WRITE-ONLY
double output(0) firstoutput; //value to send to y0 output
double output(1) secondoutput; //value to send to y1 output
string output(2) thirdoutput; //value to send to y1 output
//add output signals as needed


//the init procedure is executed once when the REXLANG function block initializes
long init(void)
{
	/* PUT YOUR CODE HERE */
	return 0;
}

//the main procedure is executed repeatedly (once in each sampling period)
long main(void)
{
//Setting various items (int, double, string)
	SetExt(".CNI:icn", firstinput);					//relative ItemID
	SetExt("parchange_task.CNR:ycn", secondinput);	//absolut ItemID
	SetExt(".CNS:scv", thirdinput);

//Reading items back and writting it to outputs
	firstoutput = GetExtInt(".CNI:icn");
	secondoutput = GetExtDouble(".CNR:ycn");
	thirdoutput = GetExtString(".CNS:scv");
	return 0;
}

//the exit procedure is executed once when the task is correctly terminated
// (system shutdown, downloading new control algorithm, etc.)
long exit(void)
{
	/* PUT YOUR CODE HERE */
	return 0;
}
