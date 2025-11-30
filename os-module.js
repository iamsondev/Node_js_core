const os = require("os");
console.log("System info \n");
console.log("*".repeat(100));

console.log("Platform details:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Os Type:", os.type());
console.log("OS Release:", os.release());
console.log("Hostname:", os.hostname());

console.log("/nCPU info:");
const cpus = os.cpus();
console.log("Cpu model:", cpus[0].model);
console.log("Number of cores:", cpus.length);
console.log("Cpu speed:", cpus[0].speed);
console.log("*".repeat(100));

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log("Total Memory:", (totalMem / 1024 / 1024 / 1024).toFixed(3), "GB");
console.log("Free Memory:", (freeMem / 1024 / 1024 / 1024).toFixed(3), "GB");
console.log("*".repeat(100));

const uptime = os.uptime();
const days = Math.floor(uptime / 86400);
const hours = Math.floor(uptime / 86400 / 3600);
const minutes = Math.floor(uptime / 86400 / 60);
console.log(`${days} days ${hours} hours ${minutes} minutes`);
