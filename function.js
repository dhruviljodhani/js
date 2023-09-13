
// let product = new Function("a","b","return a+b")
// console.log(product(12,5));
// function product(a,b)
// {
//     return a*b;
// }


// arrow funtion
// let x =(a,b)=>
// {
//     let sum = a+b;
//     return sum;
// }
// let x = (a,b) =>a*b
// console.log(x(15,20));


// IIFE
// (function()
// {
//     console.log("hello world.....");
// })();
// ((a,b)=> 
// {
//     console.log("product is : ",a*b);
// })(22,3);


// function object
// function sumALL()
// {
// return arguments.length;
// }
// let text = sumALL(1,2,3,4,5);
// console.log(text);
// function sumALL()
// {
//     let s=0;
//     for(let i=0;i<arguments.length;i++)
//     {
//         s+=arguments[i];
//     }
//     return s;
// }
// let text = sumALL(1,2);
// console.log(text);


// this keyword
// let person = 
// {
//     firstname:"skill",
//     lastname:"qode",
//     age:11,
//     fullname:function()
//     {
//         return this.firstname+" "+this.lastname;
//     }
// }
// console.log(person.age);
// console.log(person.fullname());


// callback function
// function hello()
// { 
//     console.log("hello world");
// }
// function skill (s,callback)
// {
//     console.log("hi....",s);
//     callback();
// }
// skill("peter",hello);