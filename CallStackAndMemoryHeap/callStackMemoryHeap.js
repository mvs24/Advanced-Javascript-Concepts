//we use call stack for storing primitive variables
let num=3;
let str='stringInMemory';

// we use memory heap to store data-structures like arrays, objects
let obj = {
    name: "Marius",
    age: 20
}

let items = ["something"]

// starting with callstack
function substractTwo(num) {
    return num-2;
}

function calculate() {
    let numToSub = 3+9;
    return substractTwo(numToSub);
}

//we use call stack to get the results from different functions


debugger;
calculate();