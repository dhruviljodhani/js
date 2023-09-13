// tostring
console.log(typeof(11));
console.log(typeof((11).toString()));
console.log(((11+25).toString()));

// toexponential
console.log((125).toExponential());
console.log((125).toExponential(2));
console.log((12584357).toExponential(4));

// toprecision
console.log((1.5248325).toPrecision());
console.log((1.5248325).toPrecision(2));

// valueof
console.log((1.252).valueOf());

// number
let x="1215";
let y="12*15";
console.log(Number(x));
console.log(Number(false));
console.log(Number('10 20 30'));

// parseint
console.log(Number.parseInt(1.125));

// parsefloat
console.log(Number.parseFloat(1.125));

// isinteger
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

// issafeinteger
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));

// number parsefloat
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10"));

// number parseint
console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 20 30"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));
