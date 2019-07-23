// Web API
window;

// DOM
// asynchronous code
// setTimeout(() => {
    
// }, timeout);
// fetch()

console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000); //call stack sends this to web api and console.log("3") is pushed in stack
// if interval==0----> it is the same thing it doesnt depends on the interval it will send function in the web api afterwards in callback queue
// asking event loop if call stack is empty
// if answer of event loop id yes ->>>> it pushes the stack  and wait until function execution is finished 
//afterwards it pops the stack
console.log("3");

// 1 
//3
//2






function here() {
    console.log("hi");
}
function c() {
    here();
}

function b() {
    c();
}

function a() {
    b();

}

a();