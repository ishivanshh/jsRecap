// function of loop in any type of loop -> initialize index , check the range of index , and increment the index...

// for loop 
// can also apply on arrays
// two keywords used in loops -> Continue , Break...

for (let index = 0; index <= 10; index++) {
    if(index == 5) continue;
    // console.log(index);
}

const n = 5;
for (let i = 0; i <=  n; i++) {
    // console.log("Outer Loop value : " , i);
    for (let j = 0; j <= n; j++) {
        // console.log("Inner loop value are " ,j , "and outer loop is" , i);   
    }
}


// while loops => different from loop but method is same , it only check condition in brackets so we initializes the value above it and increment it below

let myCurr = ["india" , "canada" , "pakistan" , "dubai" , "europe"]
let i = 0
while(i < myCurr.length){
    // console.log("list of country i have visited " , myCurr[i]);
    i++;
}


// do and while loop => firsly your work is done then it will check the condition.


let score = 1;

do {
    console.log("the starting score" , score);
    score ++;
} while (score <= 10){
    console.log("your score is very low, imporve it" , score);
}

// for of loop
const arr = [1,2,3,4,5]


// here object in loop is where u want to apply this loop
for (const num of arr) {
    console.log(num)
}

// Map => store key value pairs , no dublicates 

const map = new Map()
map.set("IN" , "india")
map.set("CN" , "canada")
map.set("US" , "United states")

console.log(map);

for (const [key , value] of map) {
    console.log(key , "=> " , value)
}
// map are not iterable for now using loops

const names = {
    "game1" : "spiderman",
    "game2" : "nfs",
    "game3" : "vice city"
}

// for (const i of objects) {
//     console.log(i);
// }// TypeError: objects is not iterable

// use for in loop in objects => this for in loop specially prints keys so u have to extract values from it.


for (const key in names ) {
    console.log( "the game number is" , key , "and type is" , names[key])
}

// can for in loop works in array as well ????


// array => for in
// objects => for of


// for each

const coding = ["js" , "c++" , "pandas" ,"react" ]

coding.forEach( function (item) {
    // console.log(item);
})

// it has three values in parameters as default are item , index , arr


coding.forEach( (items , index , arr) => {
    // console.log(items , index , arr)
})

// arr = [ {} , {} , {}]

const arrWithObjects = [
    {
        language : "javascript",
        completed : 12
    },
    {
        language : "html",
        completed : 98
    },
    {
        language : "reactjs",
        completed : 33
    } 
    ]

arrWithObjects.forEach((item) => {
    console.log(item.language)
})