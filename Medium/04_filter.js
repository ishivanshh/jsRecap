const myNum = [1,2,3,4,5,6,7,8,9]

const stored = myNum.forEach( (item) => {
    return item;
})

// console.log(stored); // undefined

// because for each loop does not return anything thats why we use filter function similar to it but it returns

const filteredNum = myNum.filter( (num) => {
    return num > 3
})

// console.log(filteredNum);

const books = [
  {
    title: "The Silent Patient",
    genre: "Thriller",
    publish: 2019,
    edition: 1
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: 2
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: 5
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: 1
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: 3
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: 2
  },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    publish: 2020,
    edition: 1
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: 7
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    publish: 2016,
    edition: 2
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: 4
  }
];

const bookWithEdition = books.filter( (ed) => {
    return ed.edition == 4
})

// console.log(bookWithEdition);

const userBooks = books.filter( (bk) => bk.publish > 2000 && bk.edition == 2)
console.log(userBooks);


// map function
// example -> if we want to add 10 in all the elements in array then we can use map instead of for each loop

const myNum1 = [1,2,3,4,5,6,7,8,9]
const mapped = myNum1.map((num) => num + 10)

// console.log(mapped); 


// chaining => use of map over another map and so on... and filter can also be use in chainning


const myNumbers = [1,2,3,4,5,6,7,8,9]

const mappedNum = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter((num) => num > 40);
console.log(mappedNum);


// reduce method (specially used in shopping cart making and react also)

const myNumbers1 = [1,2,3,4,5]

const CombinedNum = myNumbers1.reduce( function (acc , currval) {
  // console.log("accumulator " ,acc , "currentValue " , currval);
  return acc + currval
}, 3)

// console.log(CombinedNum);

// now using arrow function

const myTotalSum = myNumbers1.reduce((acc , currval ) => acc + currval , 0)
// console.log(myTotalSum);

// shopping card example......

const shoppingCart = [
  {
    itemNumber : "js course",
    price : 2322
  },
  {
    itemNumber : "data science-course",
    price : 2311
  },
  {
    itemNumber : "python crash corse",
    price : 1999
  },
  {
    itemNumber : "wellfound acc",
    price : 123
  },
]

const totalPrice = shoppingCart.reduce((acc, currentPrice) => acc + currentPrice.price , 0)
console.log(totalPrice);