//Node needs to be installed.
//Open "Terminal" window.
//At the Terminal prompt type: node test
//Press "enter".
//See result from the console logs.

// simple methods can go straight into the console.log

console.log("1.", !isNaN("age"));
console.log("2.", isNaN("123"));
console.log("3.", isNaN("Hopper") && isNaN("r"));
console.log("4.", isNaN("Hopper") && isNaN("123"));
console.log("5.", isNaN("Hopper") || isNaN("123"));

// console.log draws from initialized variables outside of it

const today = new Date();

console.log("6.",today.toDateString());

//         embedded javascript
//notice: the logic of any javascript can be written without errors in the terminal but to get output showing in the terminal you need to use a console.log().

const rate = -5;

if (isNaN(rate)) {
  console.log("You did not provide a number for the rate.");
} else if (rate < 0) {
  console.log("The rate may not be less than zero.");
} else if (rate > 12) {
  console.log("The rate may not be greater than 12.");
} else {
  console.log("The rate is: " + rate + ".");
}

// embedded javascript
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i; // adds i to sum
  i++;
  console.log(sum);
}
console.log(sum);

//embedded javascript with a for-in loop
const emoji = require("node-emoji");

const rocketship = emoji.get("rocket");
const list = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const countdown = [
  "       " + 3,
  "       " + ".",
  "       " + ".",
  "       " + ".",
  "       " + 2,
  "       " + ".",
  "       " + ".",
  "       " + ".",
  "       " + 1,
  "       " + ".",
  "       " + ".",
  "       " + ".",
  "       " + rocketship,
  "      .",
  "     ...",
  "    .....",
  "   .......",
  "  .........",
  " ...........",
  ".............",
  ".............",
];

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const doSomething = async () => {
  for (const item of list) {
    await sleep(250);
    console.log(countdown[item]);
  }
};

doSomething();
