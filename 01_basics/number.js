// # In this chapter we are going to learn about Number in js

const num = new Number('33');
// console.log(typeof num);

// Number() - Ensure that return value type should be number
const num2 = '33';
// console.log( typeof Number(num2));

// toString() - Convert number into the string
const num3 = 44;
const num4 = (num3.toString());
// console.log(typeof num4);

// toPrecision() - Returns a precise numbuer (upper value after decimal)
const num5 = 123.45678;
// console.log(num5.toPrecision(4));

// toFixed - Returns round figure value after the given decimal number
const cartValue = 20.99999;
// console.log(cartValue.toFixed(2));

// Generate Random Number
console.log(Math.floor((Math.random()) * 10) + 1);

// toLocalString() 
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // Returns - 10,00,000
