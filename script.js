let x = 5;
let y = 10;
let sum = x + y;
console.log("the sum of x and y is " + sum);

//push test examples it will add an element to the end of the array
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

let cars = ["bmw", "toyota"];
cars.push("audi");
console.log(cars);

// //pop test examples it will remove the last element from the array
let fruit = ["apple", "banana ", "orange "];
fruits.pop();
console.log(fruits);

let vehicles = ["bmw", "toyota", "audi"];
vehicles.pop();
console.log(vehicles);

// includes ()
let colors = ["red", "blue", "green"];
console.log(colors.includes("blue")); // true
console.log(colors.includes("yellow")); // false

let animals = ["cat", "dog", "rabbit"];
console.log(animals.includes("dog")); // true
console.log(animals.includes("lion")); // false

console.log("Hello, JavaScript!");
alert("Welcome!");
document.write("Hello World");
