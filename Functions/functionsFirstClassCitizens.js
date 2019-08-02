// Functions are first class citizens in JS
// 1
var something = function() {};

//2
function a(func) {
  func();
}

a(function() {
  console.log("calling function as parameter");
});
// 3
function c() {
  return function d() {
    console.log("returning function");
  };
}

c()()
