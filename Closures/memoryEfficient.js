function withoutClosure(index) {
  let array = new Array(10000).fill("hi");
  console.log("creating array");
  return array[index];
}

withoutClosure(100);
withoutClosure(100);
withoutClosure(100);
withoutClosure(100);
withoutClosure(100);
withoutClosure(100);

function withClosure() {
  let array = new Array(10000).fill("hi");
  console.log("creating array");
  return function(index) {
    return array[index];
  };
}

const closure = withClosure();
closure(100);
closure(100);
closure(100);
closure(100);
