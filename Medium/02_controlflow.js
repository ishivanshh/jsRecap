// if and else 

    const userLoggedIn = false;

    const userAuthenticated = 1;
    
    if(userLoggedIn || userAuthenticated){
        console.log("welcome to out store")
    } else console.log("please log in");

// switch statememt

const month = "march";

switch (month) {
    case "monday":
        console.log("valid month");
        break;
    case "march":
        console.log("its birthdy month");
        break;
    default:
        console.log("its ok if you dont remeber")
        break;
}


/*
false value => 0 , -0 , false , null . undefined , NAN ..
truthy values => {} . [] . " " , "0" , "false" , function(){}
*/

// check wheather array is empty or not

const myarr = [];

if(myarr.length === 0) console.log("Array is empty");

// check for object

const myObject = {};
// converted to object to array then used length function
if(Object.keys(myObject).length === 0) console.log("object is empty");


// NULLISH COALESCING OPERATOR (??) works well for null , undefined

let val;
val = 12 ?? 5;
console.log(val); 
// but if 
let val2;
val2 = null ?? 1;
console.log(val2); 

// TERNINARY OPERATOR.

// condition ? true : false

(val === 12) ? console.log("number is greater than 10") : console.log("number is invalid");

