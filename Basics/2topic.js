// Strings


const year = 4
// this called string interpolation where u can inject anything in string using {}
const address = (`hey, im shivansh a ${year}th year btech student`)

console.log(address);
console.log(typeof address); // string


const name = new String("shivansh");
console.log(name[0]); // strings are object thats why can access like this.
console.log(typeof name); // object

console.log(name.toUpperCase()); // uppercase

console.log(name.indexOf("i")) // tell the index of string character

console.log(name.substring(0,4)); // returns character from 0 -> 3 (4 not included)

console.log(name.slice(-4)); // it also allow to take -ve index as a result print from back (startindex, endindex)

const username = "shivansh    " // extra spaces

console.log(username.trim()); // trimmed whitespaces

console.log(username.replace("shiv" , "tiger")); 

console.log(username.includes("hiv")) // returns true / false

const upiId = "shivi@okok@hdfc@com";

const splitedpart = upiId.split("@") // splits on the basis of @

console.log(typeof splitedpart); // object
console.log(splitedpart[0]); 




// Numbers

const balance = new Number(100);

console.log(balance.toFixed(2)); 

console.log(balance.toString()); // converted to strings

const currency = 100000

console.log(currency.toLocaleString('en-IN'));

console.log((Math.random() * 10 ) + 1); // avoid giving 0.01247463

console.log(Math.floor(Math.random() * 10) + 1);

// u can also give minimum n maximum number for random number between them

const max = 20;
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1) + min));


// date and time 

const date = new Date();

console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
