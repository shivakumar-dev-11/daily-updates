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
