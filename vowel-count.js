/*
Codewars
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  let isVowel = (letter) => {
    switch (letter) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return true;
        break;
      default:
        return false;
    }
  };

  let strArray = str.split("");
  let vowels = strArray.filter((letter) => isVowel(letter));

  return vowels.length;
}

console.log(getCount("abracadabra"));
