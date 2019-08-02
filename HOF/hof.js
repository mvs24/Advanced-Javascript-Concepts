function authenticate(time) {
  console.log(`Authenticated after ${time} seconds`);
}
function hof(person, func) {
  switch (person) {
    case "user":
      func(1000);
      break;
    case "admin":
      func(5000);
      break;
  }
}

hof("admin", authenticate);
