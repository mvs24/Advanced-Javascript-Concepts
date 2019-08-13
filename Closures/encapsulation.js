const one = () => {
    let timer = 0;
    const passTime = () => {
      console.log(timer);
      return timer++;
    };
    const two = () => {
      timer--;
    };
    setInterval(passTime, 1000);
    return {
      passTime
    };
  };
  
  const encapsulate = one();
  // encapsulate.passTime();
  encapsulate.two(); // ??????
  