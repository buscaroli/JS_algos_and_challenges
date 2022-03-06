/*
This file is use to try small scripts while coding the real algorithms/challenges.
*/

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(arr1.concat(arr2))

const range = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  )
}

console.log(range(5, 18, 3))
