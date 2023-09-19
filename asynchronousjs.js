// 1. Javascript setTimeout()

    // function greet() {
    //     console.log('Hello world');
    // }
    // greet();
    // setTimeout(greet, 2000);
    // console.log('This message is shown first');
    // console.log('Today to much Rain...');
    // let x = setInterval(greet, 2000);
    // clearInterval(x);


// 2. The setTimeout() method returns the interval id. 

// function greet() 
//  {
// console.log('Hello world');
//  }
// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);   


// 3. JavaScript clearTimeout()

// let count = 0;
// function increaseCount()
// {
//     count += 1;
//     console.log(count)
// }
// let id = setTimeout(increaseCount, 3000);
// clearTimeout
// clearTimeout(id); 
// console.log('setTimeout is stopped.');


// 4. JavaScript CallBack Function

// function greet()
//  {
//     console.log('Hello world');
// }
// function sayName(name)
//  {
//     console.log('Hello' + ' ' + name);
// }
// calling the function
// setTimeout(greet, 2000);
// sayName('John');


// 5. javascript promise

// const count = false;
// let countValue = new Promise(function (resolve, reject)
//  {
// if (count)
//  {
// resolve("There is a count value.");
// } else 
// {
// reject("There is no count value");
// }
// });
// console.log(countValue);
// countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));


// 6. JavaScript then() method

    // let countValue = new Promise(function (resolve, reject) {
    //     resolve("Promise resolved");
    // });
    // countValue
    //     .then(function successValue(result) {
    //     console.log(result);
    //     })
    
    //     .then(function successValue1() {
    //     console.log("You can call multiple functions this way.");
    //     });


// 7. JavaScript catch() method

    // let countValue = new Promise(function (resolve, reject) {
    //     reject('Promise rejected'); 
    // });
    // countValue.then(
    //     function successValue(result) {
    //         console.log(result);
    //     },
    // )
    // .catch(
    //     function errorValue(result) {
    //         console.log(result);
    //     }
    // );


// 8. JavaScript finally() method

    // let countValue = new Promise(function (resolve, reject) {
    //     resolve('Promise resolved'); 
    // });
    // countValue.then(result=>console.log(result)).finally(
    //     function greet() {
    //         console.log('This code is executed.');
    //     }
    // );
