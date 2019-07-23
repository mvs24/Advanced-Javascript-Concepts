 console.log(word);//undefined
console.log(addNumbers());//executed
console.log(addNumbers2);//undefined because during the execution face is hoisted as a variable
console.log(addNumbers2());//error



var word = "something"; //with let & const error
// function declaration
function addNumbers() {
  return 4 + 5;
}
// function expression
var addNumbers2 = function() {
    return 3+7;
};

// During the execution javascript engine knew that word will be a variable so initially word is undefined but addNumbers()
// is a function and is fully hoisted
// variables are partially hoisted  we hoist variables but not the right side (not their value)
// functions are fully hoisted

// Global Execution Context

// Global Object       this
// Hoisting
// ------------------------------
// Run your code



first() //bye
function first(){
    console.log("hi");
    
}
function first(){
    console.log("bye");
    
}