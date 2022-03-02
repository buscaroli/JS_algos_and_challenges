/*
This file is use to try small scripts while coding the real algorithms/challenges.
*/

const str = "hitherehello";
const lastIndex = str.length - 1;
console.log(str[lastIndex]);
let newArr = [];
for (let i = lastIndex; i >= 0; i--) {
  newArr.push(str[i]);
}
console.log(newArr.join(""));

newArr = [];
for (let i = 0; i <= lastIndex; i++) {
  newArr.unshift(str[i]);
}
console.log(newArr.join(""));
