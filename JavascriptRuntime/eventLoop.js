const fs = require("fs");
const crypto = require("crypto");
let start = Date.now();


setTimeout(() => {
  console.log("timer 1 finished");
}, 0);
process.nextTick(() => console.log("process.nextTick() finished"));

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("timer 2");
  }, 0);
  setTimeout(() => {
    console.log("timer 3");
  }, 2500);
  setImmediate(() => console.log("immediate finished"));
  process.nextTick(() => console.log("process.nextTick() 2 finished"));
  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha256");
  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha256", () => {
    console.log(
      "crypto finished after " + (Date.now() - start) + "miliseconds"
    );
  });
  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha256", () => {
    console.log(
      "crypto finished after " + (Date.now() - start) + "miliseconds"
    );
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha256", () => {
    console.log(
      "crypto finished after " + (Date.now() - start) + "miliseconds"
    );
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha256", () => {
    console.log(
      "crypto finished after " + (Date.now() - start) + "miliseconds"
    );
  });
});

console.log("file read");
