function one() {
  let string1 = "one";
  return function two() {
    let string2 = "two";
    return function three() {
      let string3 = "three";
      console.log(string1, string2, string3);
    };
  };
}
one()()();

const closure = string => number1 => number2 =>
  console.log(`${string} ${number1} ${number2}`);

closure("hi")(1)(10);
