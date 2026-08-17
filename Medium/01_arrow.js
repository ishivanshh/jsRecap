// this function only works on object no function. 

const users = {
    username : "shivi",
    id : 123,

    welcomeMessage : function(){
        console.log(`${this.username} hello, we welcome you!`)
        console.log(this); // it will give u the context of all inside to respected object (users)
        
    }
}

users.welcomeMessage()
users.username = "rose"
users.welcomeMessage()

console.log(this); // if we print this here it will give empty {} as we are in node environment go and check in browser. then it shows this means whole window.

// types of way to define a function

function one(){
    console.log("heelo from one");
}

const user1 = function two(){
    console.log("heelo from second");
}

// important arrow function

const abc = () => {
    console.log("hello from arrow function")
}

// when using arrow function if we used {} then u have to mention return but if you are doing implicit or using () then u dont have to mention return function

const make = (num1 ,num2) => (num1 + num2)
console.log(make(2,3))

// but for returing object inside arrow function u have to use curly bracket

const usersim = () => ({username : "shivansh" , age : 12})
console.log(usersim());

//////+++++++++++++++++++++++++///

// IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) => when u want any particular function to invoke first rather than later. syntax :   ()()
// sometimes there is problem because of global scope pollution so to remove it we use IIFE to remove global and run this function first.

// named iife
(function rcb(){
    console.log("DB connected")
})(); // use semi-colon at last of IIFE function just to tell this is end. else it will give error 

// un-named iife

(() => {
    console.log("virat")
})();
