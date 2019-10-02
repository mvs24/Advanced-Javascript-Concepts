let modulePattern = (function() {
//   everything inside IIFE not being returned, is private to this IIFE
  let number1 = 4;
  let number2 = 13;
  function sum(num3) {
    return number1 + number2 + num3;
  }
  return {
   // everything returned is going to be public
    sum
  };
})();

console.log(modulePattern.sum(13));
