// 1. for in loop
let person = 
{
    name:"skill",
    age:25,
    email:"test@hello.in"
};
for (let i in person)
{
    console.log(person[i]);
}


let abc = ["apple","banana","kiwi","orange"];
for(let x in abc)
{
    console.log(abc[x]);
}


let mystring = "hello how are you?";
for(let i in mystring)
{
    console.log(mystring[i]);
}


// 2.for of loop
let myString = "hello how are you?";
for(let x of mystring)
{
    console.log(x);
}


let xyz = ["apple","banana","kiwi","orange"];
for(let x of xyz)
{
    console.log(x);
}