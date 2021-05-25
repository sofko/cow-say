const myInformation = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, I am ${myInformation.myName} from ${myInformation.myCampus}`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()