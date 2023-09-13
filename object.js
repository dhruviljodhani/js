//1.object creating as a variable
// let person = {
//     name:"skill",
//     age:  10,
//     email:"hello@test.com",
//     hello:function()
//     {
//         return `${this.name} is ${this.age}`
//     }
// };
// console.log(person);
// console.log(person.name);
// console.log(person.hello());
// console.log(person["age"]);


//2.object create
// let test = new Object();
// test.name ="hello";
// test.email = "hello@test.in"
// test.abc = function()
// {
//     console.log("hello world");
// }
// test.abc();
// delete test.email;
// console.log(test);


//3.nested object
// let person = {
//     name :"skill",
//     age : 25,
//     email:"hello@test.com",

//     address :{
//         city: "surat",
//         state: "gujrat",
//         country:"india"
//     }
// };
// console.log(person.address.city)


//4.assign method
// let person = {
//     name :"skill",
//     age : 25,
//     email:"hello@test.com",
// };
// let abc ={};
// Object.assign(abc,person);
// console.log(abc);