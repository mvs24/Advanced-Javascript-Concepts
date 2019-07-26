function one() {
  let a = "a";
  return function two() {
    let b = "b";
    //console.log(c); //undefined
    return function three() {
      console.log(a,b);
      let c = "c";
    };
  };
}
one()()();
