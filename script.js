let numCount = 0;
let userInput;

while (userInput !== "quit") {
  userInput = prompt(
    "What task would you like to run? (sum, convert, low, wordCounter, random, randomRange, capitalize, quit)"
  );

  numCount++;

  switch (userInput) {
    case "sum": {
      const [numOne, numTwo] = promptUserForNumbers();
      sum(numOne, numTwo);
      alert(`The sum of ${numOne} and ${numTwo} is ${sum(numOne, numTwo)}`);
      break;
    }
    case "convert": {
      const numOfMinutes = Number(prompt("Enter the number of minutes"));
      const numOfSeconds = Number(convert(numOfMinutes));
      alert(`There are ${numOfSeconds} seconds in ${numOfMinutes} minutes.`);
      break;
    }
    case "low": {
      const [numOne, numTwo] = promptUserForNumbers();
      alert(low(numOne, numTwo));
      break;
    }
    case "random": {
      const maxNum = Number(prompt("Enter the maximum number:"));
      alert(random(maxNum));
      break;
    }
    case "wordCounter": {
      const sentence = prompt("Enter a sentence to count the words:");
      alert(wordCounter(sentence));
      break;
    }
    case "randomRange": {
      const minNum = Number(prompt("Enter the minimum number:"));
      const maxNum = Number(prompt("Enter the maximum number:"));
      alert(randomRange(minNum, maxNum));
      break;
    }
    case "capitalize": {
      const sentence = prompt("Enter a sentence to count the words:");
      alert(capitalize(sentence));
      break;
    }
    case "quit":
      alert(quit());
      break;
    default:
      alert("I'm sorry I don't recognize that command.");
  }
}

function promptUserForNumbers() {
  const numOne = Number(prompt("Enter your first number"));
  const numTwo = Number(prompt("Enter your second number"));
  return [numOne, numTwo];
}

function sum(a, b) {
  return a + b;
}

function convert(minutes) {
  return minutes * 60;
}

function low(a, b) {
  return a < b
    ? "The first number is less than the second number"
    : "The first number is not less than the second number";
}

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

function wordCounter(sentence) {
  return sentence.split(" ").length;
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function quit() {
  return `You have used this application ${numCount} times. Farewell!`;
}
