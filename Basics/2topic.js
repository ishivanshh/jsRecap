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


