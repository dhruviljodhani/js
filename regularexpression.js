// let data='Hello world,I am learning  Javascript skillqode@hello.in';
// let reg = /Java/i;
// let reg = /i/g;
// let reg = /[h,e,5]/g;
// let reg = /(h|i|@)/g;
// let reg = /\d/g;
// let reg = /\s/g;
// let reg = /ing\b/g;
// let result = data.match(reg);
// console.log(result);

let mo = "915-565-1425"
let reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{4}$/
result = mo.match(reg);
console.log(result);