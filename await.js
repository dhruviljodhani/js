// 1. JavaScript await Keyword

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. 
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve('Promise resolved')}, 4000); 
    // });

    // // async function
    // async function asyncFunc() {

    //     // wait until the promise resolves 
    //     let result = await promise; 

    //     console.log(result);
    //     console.log('hello');
    // }

    // // calling the async function
    // asyncFunc();




// This can be useful if there are multiple promises in the program.
    // let promise1 = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve('Promise 1 resolved')
    //     }, 2000);
    // });
    // let promise2 = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve('Promise 2 resolved')
    //     }, 3000);
    // });
    // let promise3 = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve('Promise 3 resolved')
    //     }, 4000);
    // });

    // async function asyncFunc() {
    //     let result1 = await promise1;
    //     console.log(result1);
        
    //     let result2 = await promise2;
    //     console.log(result2);

    //     let result3 = await promise3;

    //     console.log(result3);
    // }
    // asyncFunc();

