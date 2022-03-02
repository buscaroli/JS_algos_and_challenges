/*
Codewars
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
*/
var uniqueInOrder = function (iterable) {
  if (iterable.length === 0) return [];
  if (typeof iterable === "string") iterable.split();
  // console.log(iterable);
  let unique = [iterable[0]];

  let curr, next;
  for (let i = 0; i < iterable.length - 1; i++) {
    curr = iterable[i];
    next = iterable[i + 1];
    if (curr !== next) unique.push(next);
  }
  return unique;
};

console.log(uniqueInOrder(["h", "e", "l", "l", "o"]));
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
