// function

function myname() {
    console.log("my name is func");
}
myname();

// myname only tells func exists
// myname(); // call function


function addTwoNumbers(num1,num2) {
    let sum = num1 + num2;
    return sum;
}
let result = addTwoNumbers(2,3);
console.log(`addition of 2 numbers : ${result}`);


// lets take example of shopping cart the way we add add products it adds again and again

function calculateCartValue (...nums) {
    return nums
}
// [ 200, 300, 400, 500, 600 ] now u can apply any method to calculate the total using loops or reduce function

console.log(calculateCartValue(200,300,400,500,600));

// how to handle any object in function...
const users = {
    username : "ishivanshh",
    email : "shivi@gmail.com",
    password : 1234
}
const users1 = {
    username : "viratt",
    email : "vuratt@gmail.com",
    password : 5432
}

function handleObject (anyObject){
    console.log(`this is my emailid ${anyObject.email}`)
    console.log(`this is my emailid ${anyObject.email}`)
}

console.log(handleObject(users));

// similarly how to handle when array is passed in function

const myarr1 = [200,100,233,12,34,12];

function handleArray (getArray){
    console.log(`this is my marks in 1st sem :  ${getArray[1]}`)
}
handleArray(myarr1);


// scope and arrow function
