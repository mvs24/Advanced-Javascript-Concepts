function blockScope() {
  // ES6
  for (let i = 0; i < 2; i++) {
    console.log(i);
  }
  // console.log(i);  i is not defined
}
function blockScope2() {
  for (var i = 0; i < 2; i++) {
    console.log(i);
  }
  console.log(i); //2
}

blockScope();
blockScope2();
