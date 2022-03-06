/*
Codewars
A Narcissistic Number is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 
 and 1652 (4 digits), which isn't:
 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Your code must return true or false (not 'true' and 'false') depending upon
whether the given number is a Narcissistic number in base 10. 
This may be True and False in your language, e.g. PHP.
Error checking for text strings or other invalid inputs is not 
required, only valid positive non-zero integers will be passed into the
function.
*/
function narcissistic(value) {
  var myNum = value // to avoid mutating 'value'
  let numLength = value.toString().length // num of digits

  let acc = 0
  var digit

  for (let i = 0; i < numLength; i++) {
    digit = myNum % 10 // get the rightmost digit
    myNum = Math.floor(myNum / 10) // remove the rightmost digit
    acc += Math.pow(digit, numLength)
  }
  return value === acc
}

console.log(narcissistic(152))
console.log(narcissistic(1652))
