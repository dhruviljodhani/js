let a = 200;

	if (a<=100)
	{
		if((a*0.6)>50)
	{
	     console.log("your bill is ...",(a*0.6));
    }
    else
    {
        console.log("your bill is 50");
    }
    }
    else if(a>100 && a<300)
    {
        console.log("your bill is ...",60+(a-100)*0.8);
    }
    else if (a>300)
    {
        if(220+(a-300*0.9)>300)
        console.log("your bill is..",220+((a-300)*0.9)+((220+((a-300)*0.9))*15)/100);
    }
    else{
        console.log("your bill is..",60+160+(a-300)*0.9)
    }