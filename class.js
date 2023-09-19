// 1. class
// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     hello() {
//         return (`hello skillqode`);
//     }
//     newAge(){
//         return this.age +10;
//     }
// };
// let x = new person(`peter`,25);

// console.log(x.name)
// console.log(x.age)
// console.log(x.hello())
// console.log(x.newAge())


//rest opretopr => ...
// function product(...args){
//     let s = 1;
//     for(let i of args){
//         s*=i;
//     }
//     return s;
// }
// a = product(10,5,12,14)
// console.log(a);

// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);

// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

// let a = {x:1,y:2}
// let b = {z:1}
// let c = {a,...b};
// console.log(c);
// a.s = 5;
// console.log(a);
// console.log(c);


//Function generator
// function* generator(){
//     yield 1;
//     yield 2;
//     return `3`
// }
// let hello = generator();
// console.log(hello.next().value);
// console.log(hello.next().value);
// console.log(hello.next().value);


//Function Call Method
// function greet(){
//     return`${this.name}s age is ${this.age}`;
// }
// let person = {
//     name : "yash",
//     age : 21
// };
// x = greet.call(Person);
// console.log(x);


//Apply Method
// function greet(city,state){
//         return`${this.name}s age is ${this.age} and lives in ${city},${state}`;
//     }
//     let person = {
//         name : "yash",
//         age : 21
//     };
//     x = greet.call(Person['surat','gujarat']);
//     console.log(x);
    

//Bind Method
// function greet(){
//     return`${this.name}s age is ${this.age}`;
// }
// let person = {
//     name : "yash",
//     age : 21
// };
// x = greet.call(Person);
// console.log(x());