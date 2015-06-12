double input(0) input_u0;
double input(3) input_u3;

double parameter(0) param_p0;
double parameter(1) param_p1;

double output(2) output_y2;
double output(10) output_y10;

long init(void)
{
	return 0;
}

long main(void)
{
	output_y2 = input_u0 + input_u3;
	output_y10 = param_p0 + param_p1;
  return 0;
}

long exit(void)
{
	return 0;
}