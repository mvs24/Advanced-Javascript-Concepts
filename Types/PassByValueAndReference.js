// Passing by value (primitive types)
let a = 10;
let b = a;
b++;
console.log(a);
console.log(b);

// Passing by reference (objects)
let obj1 = { name: "John", age: 20 };
let obj2 = obj1;
obj2.age = 33;
console.log(obj1);
console.log(obj2);

// ******************** Dont pass by reference************
let array1 = [1, 2, 3, 4];
let array2 = [].concat(array1);
array2.push(5);
let array3 = [...array1];
array3.push(6);
console.log(array1);
console.log(array2);
console.log(array3);

//

let obj1 = { name: "John", age: 20 };
let obj2 = Object.assign({}, obj1);
obj2.age = 33;
let obj3 = { ...obj1 };
obj3.age = 55;
console.log(obj1, obj2, obj3);

let deepClone = { name: "John", age: 20, deep: { name: "hi" } };
let clone = JSON.parse(JSON.stringify(deepClone));
deepClone.deep.name = "hello";
console.log(clone);
