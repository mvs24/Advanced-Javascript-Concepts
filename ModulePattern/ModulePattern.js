let modulePattern = (function() {
  let number1 = 4;
  let number2 = 13;
  function sum(num3) {
    return number1 + number2 + num3;
  }
  return {
    sum
  };
})();

console.log(modulePatrern.sum(13));
