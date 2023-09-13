// // let result
// let txt = "how are you guys?"
// let result = txt.length;
// console.log(result)

// // slice(positive)
// result = txt.slice(5,9);
// console.log(result);

// // slice(negative)
// result = txt.slice(6);
// result = txt.slice(-15,-9);
// console.log(result);

// // substr
// result = txt.substr(5,9);
// result = txt.substr(-15,3);
// console.log(result)

// // substring
// result = txt.substring(-5,9);
// result = txt.substring(9);
// console.log(result)

// // touppercase
// result = txt.toUpperCase();
// console.log(result);

// // tolowercase
// result = txt.toLowerCase();
// console.log(result);

// // concat
// let a = "hello";
// let b = "world";
// result = a.concat(" "+b);
// console.log(result);

// replace
// let data = 'hi,how are you?';
// let result;
// data = data.replace('you',"all");
// console.log(data);
// data = data.replace(/you/i,"all");
// data = data.replace(/you/g,"all");
// console.log(data);

// replaceall
// let data = 'hi,how are you?';
// let result;
// data = data.replaceAll("you","hello");
// console.log(data);

// // trim
// let a = "hello";
// console.log(a.length);
// result = a.trim();
// console.log(result);

// trimstart
// let a = "     hello world     ";
// console.log(a.length);
// a = a.trimStart();
// console.log(a.length);
// console.log(a);

// trimend
let a = "      hello world     ";
console.log(a.length);
a = a.trimEnd();
console.log(a.length);
console.log(a);

// padstart
let b = "5";
result = b.padStart(5,"x");
console.log(result);

// padend
let c = "5";
result = b.padEnd(5,"-");
console.log(result);

// charat
let txt = " skillqode ";
result = txt.charAt(2);
console.log(result);

// charcodeAt
let d = " skillqode ";
result = d.charCodeAt(5);
console.log(result);

// split
let data = "hello world guys";
result = data.split(" ");
console.log(result);