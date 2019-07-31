//Primitive
typeof 10;
typeof "hi";
typeof true;
typeof undefined;
typeof null; //????
typeof Symbol("hello");

true.toString(); //'true' acting like an object
console.log(Number(5).toString());
// Non primitive

typeof {};
typeof [];
typeof function() {};

console.log(Array.isArray([1, 2, 3]));
