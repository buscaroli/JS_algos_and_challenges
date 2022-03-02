/* 
Codewars.
An isogram is a word that has no repeating letters,
consecutive or non-consecutive. Implement a function that 
determines whether a string that contains only letters is 
an isogram. Assume the empty string is an isogram. 
Ignore letter case. 
*/

function isIsogram(str) {
  if (str.length === 0) return true;
  let string = str.toLowerCase();

  let strSet = new Set(string);
  // console.log(`strArray: ${strArray}`);
  // console.log("strSet: ", strSet);
  // console.log(`lengths: ${strArray.length} - ${strSet.size}`);
  return str.length === strSet.size;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
