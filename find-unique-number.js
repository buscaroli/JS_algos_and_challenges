/*
Codewars
There is an array with some numbers. All numbers are equal except for one.
Try to find it!

It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  let sortedArr = arr.sort();
  console.log(sortedArr);
  let shortenedArray = sortedArr.slice(0, 2).concat(sortedArr.slice(-1));
  console.log(shortenedArray);
  if (shortenedArray[0] === shortenedArray[1]) {
    return shortenedArray[2];
  } else {
    return shortenedArray[0];
  }
}

findUniq([1, 1, 1, 2, 1, 1]);
