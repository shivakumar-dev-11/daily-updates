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

var name = "Shiva"; // old method
let age = 20; // recommended
const country = "India"; // cannot be changed

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);
const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(
  `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`,
);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(
  `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`,
);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(
  `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`,
);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);
console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`,
);
