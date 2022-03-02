/*
Codewars
Given an array of integers, find the one that appears an odd number 
of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  let myMap = new Map();
  A.forEach((n) => {
    let value = myMap.get(n);
    //console.log("value -> ", value);
    myMap.get(n) ? myMap.set(n, ++value) : myMap.set(n, 1);
  });
  //console.log(myMap);
  const myArray = Array.from(myMap);
  const result = myArray.filter((n) => n[1] % 2 !== 0);

  //console.log("Result -> ", result[0][0]);
  return result[0][0];
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
