/*
Codewars
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case)

// If first letter needs to be capitalized, first convert the string with:
    let newStr = str[0].toUpperCase() + str.slice(1); 
*/

function toCamelCase(str) {
  let regex = /[-_]./g;

  // console.log(newStr);
  // console.log(newStr.match(regex));

  let camelCasdStr = str.replace(regex, (match) => match[1].toUpperCase());
  return camelCasdStr;
}

console.log(toCamelCase("hi-there_how_are-you"));

/* 
Alternative

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

*/
