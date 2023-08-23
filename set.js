let data = new set(['apple','mango','banana','kiwi']);
console.log(data);


data.add('orange');
console.log('set size is'+data.size);
console.log(data.has('orange'));
console.log(data.value());
console.delete(data.delete('kiwi'));
console.log(data);

let a=" ";
data.foreach(function(val){
     a+=val +"\n";
})

