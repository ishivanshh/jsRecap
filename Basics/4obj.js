// objects

// 1. singelton objects -> object.create
// 2. object iterals -> const user = {}

const user = {
    name : "shivi",
    age : 12,
    isloggedin : false
}

console.log(user.name);
console.log(user["age"])

// creating symbol and storing in object
const mysym = Symbol("key1");

const user1 = {
    name : "virat",
    [mysym] : "first-symbol",
    email : "virat@gmail.com",
    occup: "cricketer"
}
// user1.freeze(); // now no one can change the object user1
console.log(user1);

// functions


user1.greeting = function(){
    console.log("heelo from function")
}
// console.log(user1.greeting());

// accessing values in user1 

user1.greetingtwo = function(){
    console.log(`hello js user ${this.email}`);
}

console.log(user1.greetingtwo());

// combine as much as object together using spread operator

// when u recive data in the form of array of objects then we can access the data using index and key
const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" }
];

// console.log(users[0].role); 

const user11 = {
    name : "shivansh",
    [mysym] : "first-symbol",
    email : "shivansh@gmail.com",
    occup: "cricketer"
}

console.log(Object.keys(user11)); // printing all the keys of object

console.log(Object.values(user11)); // printing all the values of object

// de-structuring of object

const course = {
    coursename : "js",
    price : 999,
    courseInstructor : "shivansh"
}

