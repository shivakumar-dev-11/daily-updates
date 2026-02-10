//day 1 for problem solving
// finding even or odd number
function Numbers(num1, num2, num3) {
  let result = {};

  if (num1 % 2 === 0) {
    result.num1 = "even number";
  } else {
    result.num1 = "odd number";
  }

  if (num2 % 2 === 0) {
    result.num2 = "even number";
  } else {
    result.num2 = "odd number";
  }

  if (num3 % 2 === 0) {
    result.num3 = "even number";
  } else {
    result.num3 = "odd number";
  }

  return result;
}
// largest of three numbers long way
function largestNumber(a, b, c) {
  let largest;
  if (a > b && a > c) {
    largest = a;
  } else {
    if (b > a && b > c) {
      largest = b;
    } else {
      largest = c;
    }
  }
  return largest;
}
//easy way to find largest number
function largestNumber(a, b, c) {
  return Math.max(a, b, c);
}
