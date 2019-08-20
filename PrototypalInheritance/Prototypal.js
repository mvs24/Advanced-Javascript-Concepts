// creating a lastYear() method in Date

Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
};
console.log(new Date("1998-10-10").lastYear());

//   modifying the map built in method
Array.prototype.map = function() {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(this[i] + "😍");
  }
  return array;
};

console.log([1, 2, 3].map());
