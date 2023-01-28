//os is a built in module

const os = require("os");

//info about current user

const user = os.userInfo();

// method returns system uptime in seconds

console.log(`The system Uptime is ${os.uptime()} seconds`);

//methods to return current information about the operating system

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
