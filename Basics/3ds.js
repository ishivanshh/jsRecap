// Array 

const myarr = [1,2,3,4,5]
console.log(`original array :  ${myarr}`)

console.log(typeof myarr) // object 
console.log(myarr[1]) // 2

const newArr = myarr.join(); // change to string with commo seperation
console.log(typeof newArr); // strings

// splice prototype
const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);


months.splice(3, 1, "May");
// Replaces 1 element at index 4
console.log(months);

// splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2)

// slice prototype
// slice()
// slice(start)
// slice(start, end)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); // after index return all 
console.log(animals.slice(-1))

// concatenation of array

// best spread operator 
const superheros = ["virat", "shaktiman", "batman"];
const superheroines = ["black" , "widow" , "strom"];

const alltogether = [...superheros , ...superheroines];
console.log(alltogether); 
// u can add as much as array together 

// when u got array inside array and so on...

const realarr = [1,2,3,[4,5,6],5,[1,3,[4,1]]];
console.log(realarr.flat(Infinity)); // combine all them in single level

const name = "shivi";
console.log(Array.of(name)); // [ 'shivi' ]
console.log(Array.from(name)); // [ 's', 'h', 'i', 'v', 'i' ]

const isloggedin = false;
console.log(Array.of(isloggedin));

let score1 = 100
let score2 = 101
let score3 = 112

const combo = Array.of(score1,score2,score3);
console.log(combo[1]);
