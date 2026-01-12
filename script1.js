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
