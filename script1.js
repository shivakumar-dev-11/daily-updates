function getNumber() {
  return Number(document.getElementById("numberInput").value);
}

function calculateSum() {
  let n = getNumber();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("result").innerText = "Sum = " + sum;
}

function checkPrime() {
  let n = getNumber();
  if (n < 2) {
    document.getElementById("result").innerText = "Not a Prime Number";
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      document.getElementById("result").innerText = "Not a Prime Number";
      return;
    }
  }
  document.getElementById("result").innerText = "Prime Number";
}

function checkEven() {
  let n = getNumber();
  document.getElementById("result").innerText =
    n % 2 === 0 ? "Even Number" : "Not Even";
}

function checkOdd() {
  let n = getNumber();
  document.getElementById("result").innerText =
    n % 2 !== 0 ? "Odd Number" : "Not Odd";
}

function checkArmstrong() {
  let n = getNumber();
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }
  document.getElementById("result").innerText =
    sum === n ? "Armstrong Number" : "Not an Armstrong Number";
}

function checkPalindrome() {
  let n = getNumber();
  let rev = 0,
    temp = n;
  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  document.getElementById("result").innerText =
    rev === n ? "Palindrome Number" : "Not a Palindrome";
}

function clearInput() {
  document.getElementById("numberInput").value = "";
  document.getElementById("result").innerText = "Result will appear here";
}
function submitForm() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const fullName = name + " " + surname;

  document.getElementById("output").innerText = " welcome  " + fullName;
  const word = document.getElementById("word").value;
  document.getElementById("wordLength").innerText =
    "Length of the word is: " + word.length;
}
const lowercaseWord = "camelcase";
const camelCasedVersion =
  lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();
console.log("Camel cased version:");
console.log(camelCasedVersion);
function checkArmstrong() {
  let n = getNumber();
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }
  document.getElementById("result").innerText =
    sum === n ? "Armstrong Number" : "Not an Armstrong Number";
}

const thirdResult = true + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fifthResult = "10" * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = null + 22;
console.log(`0 + 22 = ${sixthResult}`);
const value1 = 5;
const value2 = 10;
const sum = value1 + value2;
console.log("Sum of value1 and value2 is: " + sum);
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log(
  "The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.",
);

const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer.",
);

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer.",
);

const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer.",
);

const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.",
);

const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

const timmyAge = 18;

const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
