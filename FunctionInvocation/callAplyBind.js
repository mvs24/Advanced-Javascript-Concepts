function one() {
    console.log("hi");
  }
  
  one.call(); //hi
  one.apply(); //hi
  

  // The difference
  
  const person1 = {
    name: "one",
    age: 50,
    modify(num1, num2) {
      return (this.age += num1 + num2);
    }
  };
  
  const person2 = {
    name: "two",
    age: 40
  };
  console.log(person2);
  person1.modify.call(person2, 20, 5);
  console.log(person2);
  
  person1.modify.apply(person2, [30, 5]);
  console.log(person2);
  
  const newFunction = person1.modify.bind(person2, 20, 5); // doesn't work it returns a function
  newFunction();
  console.log(person2);
  // { name: 'two', age: 40 }   console.log(person2);
  // { name: 'two', age: 65 }  person1.modify.call(person2, 20, 5);
  // { name: 'two', age: 100 }  person1.modify.apply(person2, [30, 5]);
  // { name: 'two', age: 125 } newFunction();
  
  
