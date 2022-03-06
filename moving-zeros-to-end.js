/*
Codewars
Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.
*/

function moveZeros(arr) {
  // Run through the array filtering the non-zero elements while counting the number od zeros.
  // At the end add as many zeros to the ens of the array as the counter suggests.
  let myArr = []
  let count = 0
  arr.forEach((x) => {
    x === 0 ? count++ : myArr.push(x)
  })
  for (let i = 0; i < count; i++) {
    myArr.push(0)
  }
  return myArr
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
