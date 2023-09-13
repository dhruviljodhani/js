let data = new set(['apple','mango','banana','kiwi']);
console.log(data);

data.add('orange');
console.log('set size is: '+data.size);
console.log(data.has('orange'));
console.log(data.value());
console.delete(data.delete('kiwi'));
console.log(data);

let a = " ";
data.foreach(function(val){
    a += val + "\n";
});
console.log(a);

let hello = new set(10,20,30,40,50);
console.log(hello.set('10'));
console.log(hello.set('20'));
console.log(hello.set('30'));
console.log(hello.set('40'));
console.log(hello.set('50'));