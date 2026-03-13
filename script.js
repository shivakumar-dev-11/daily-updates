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
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`,
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`,
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`,
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence.",
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));
console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting =
  "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence =
  "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3);
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
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

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);
