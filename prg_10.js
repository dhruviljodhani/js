let bs=5000,gs=2110,da=42,hra=44 

	if(bs > 5000)
	{
		hra = bs * 10 / 100; 
		da = bs * 90 / 100;
	}
	else
	{
		hra = 600;
		da = bs * 95 / 100;
	}
		gs = bs + da + hra;
	console.log("gross salary is rs %f",gs);