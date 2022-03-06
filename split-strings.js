/*
Codewars
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').
*/

function solution(str) {
  const isOdd = str.length % 2 ? true : false
  let myArray = []

  for (let i = 0; i < str.length; i += 2) {
    myArray.push(str.slice(i, i + 2))
  }

  if (isOdd) {
    let lastElem = myArray[myArray.length - 1] + '_'

    myArray.pop()
    myArray.push(lastElem)
  }

  return myArray
}

console.log(solution('12345'))
console.log(solution('12345678'))

/* Better alternative */
function solution2(str) {
  const isOdd = str.length % 2 ? true : false
  let myStr = str
  let myArray = []

  if (isOdd) {
    myStr = str + '_'
  }

  for (let i = 0; i < myStr.length; i += 2) {
    myArray.push(myStr.slice(i, i + 2))
  }

  return myArray
}

console.log(solution2('12345'))
console.log(solution2('12345678'))

/* Alternative */
function solution3(str) {
  let myArr = []
  for (let i = 0; i < str.length; i += 2) {
    second = str[i + 1] || '_'
    myArr.push(str[i] + second)
  }
  return myArr
}

console.log(solution3('12345'))
console.log(solution3('12345678'))
