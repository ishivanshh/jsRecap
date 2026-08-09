// let const and var => const once created does not change the value of it again and again whereas let can be modify we dont use var in latest version because of scope and functional block issues.


let instId = 22
const username = "shvi"

instId = 12 // changes the value of let

console.table([ instId , username])

// to know value of any dataype we use typeof 


let email; // undefined
const money = null // object

console.log(typeof money)


// conversion of one datatype to another mainly used one request comes from backend to use in our required datatype we convert

let score = "32" // string
let valueInNumber = Number(score) // converted to number

console.log( typeof valueInNumber);

let mainScore = "12absc"
let valuetoconvert = Number(mainScore);

console.log(typeof valuetoconvert); // same like above but
console.log(valuetoconvert); // the value is here NAN not a number 

/*
there are two types of data type
1. primitive => which uses stack and also they gives u copy of their value so original does not changes (string , numbers , boolean , null , undefined , symbol , bigint)
2. non primitive => which uses heap memory and also there refrence is given whose value changes when change done in it (array , function , object)
 */

