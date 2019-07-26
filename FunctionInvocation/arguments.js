function arg1(str1, str2){
    // arguments ->>>  object created immediately with a function in execution context
    let argumentsArray = Array.from(arguments);
    console.log(argumentsArray);
    
  }
  
  // arg1("s","p")
  
  function arg2(...args){
    // arguments ->>>  object created immediately with a function in execution context
    
    console.log(args);
    
  }
  arg2("s","p")
  