//Part 1: For LoopsPart 1: 

//Problem 1: Count array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Problem 2: Even Numbers

let numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

//Problem 3: Loop through an Array

let animals = ['dogs', 'cats', 'elephants', 'giraffes'];

for (let animal of animals) {
    console.log(`I like ${'dogs'}`);
}

//Problem 4: Reverse Array Output

let colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}

//Part 2: Objects

//Problem 5: Simple Object

// Create the person object
let person = {
    name: "Bug",
    age: 23,
    favoriteColor: "orange"
};

console.log(`Hello, my name is ${person.name}, 
    I am ${person.age} years old, 
    and my favorite color is ${person.favoriteColor}.`
);


//Problem 6: Modify an Object

person.hobby = "Reading";

console.log(person)

//Problem 7: Array of Objects

let books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 281
    },
    {
      title: "Tuck Everlasting",
      author: "Natalie Babbitt",
      pages: 139,
      isFavorite: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 180
    }
  ];
  
  console.log(books);

  //Problem 8: Favorite Book Finder

  for (let i = 0; i < books.length; i++) {
    if (books[i].isFavorite) {
      console.log(books[i]);
    }
  }

  //Bonus

  function describePerson(obj) {
    return `${obj.name} is ${obj.age} years old and loves ${obj.hobby}.`;
  }
  const person = { name: "Bug", age: 23, hobby: "cars" };
console.log(describePerson(person)); 

  





