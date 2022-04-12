/*
Replicate the range function found in other languages
*/

const range = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  )
}

console.log(range(5, 18, 3))
//=>  [ 5, 8, 11, 14, 17 ]
