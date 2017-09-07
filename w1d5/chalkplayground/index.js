var chalk = require("chalk");

var attention = chalk.bold.redBright.underline.bgGreen;
var str = "STOP";
console.log(attention(str));

var message = chalk.bold.red("Hello ") + chalk.yellow("World");
console.log(message);