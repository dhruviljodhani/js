let i=0,a=0.5
while(a<=30){

    if(i==0)
    {
        console.log(a)
    }

else if (i%2==0)
{
        a+=a
        a+=0.5
        console.log(a)
}
else{
    console.log(a+=a)
}
i++
}