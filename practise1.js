function reverse(number) 
{
    let reverse = '';
    for (let i = number.length - 1; i >= 0; i--) 
    {
      reverse += number[i];
    }
    return reverse;
}
  let String = "15438";
  let result = reverse(String);
  console.log(result);