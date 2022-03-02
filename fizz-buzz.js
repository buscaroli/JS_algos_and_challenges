/*
Classic FizzBuzz algorithm
Loop through every number from 0 to n, if the number is divisible by:
- 3: print Fizz
- 5: print Buzz
- 3 AND 5: print FizzBuzz!
*/

const fizzbuzz = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`- ${i}: FizzBuzz!`);
    } else if (i % 3 === 0) {
      console.log();
    } else if (i % 5 === 0) {
      console.log(`- ${i}: Buzz`);
    } else {
      console.log(`- ${i}: ...`);
    }
  }
};

fizzbuzz(50);

/* 
Alternative version: 
Using Array.prototype.forEach() and the Ternary operator
*/
const fizzBuzz2 = (n) => {
  let myArray = Array.from(Array(n + 1).keys()); // or: [...Array(n + 1).keys()]
  let myMap = new Map();

  myArray.forEach((i) => {
    i % 3 === 0 && i % 5 === 0
      ? console.log(`- ${i}: FizzBuzz!`)
      : i % 3 === 0
      ? console.log(`- ${i}: Fizz`)
      : i % 5 === 0
      ? console.log(`- ${i}: Buzz`)
      : console.log("...");
  });
};

fizzBuzz2(50);
