function two() {
  let isValid; //undefined
}

function one() {
  let isValid = true; //local env
  two(); //new execution context
}

let isValid = false;
one();

// two()  -- isValid = undefined
// one()  -- isValid = true;
// global() -- isValid = false;
