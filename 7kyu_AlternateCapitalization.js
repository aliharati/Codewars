// Given a string, capitalize the letters that occupy even indexes and odd
// indexes separately, and return as shown below. Index 0 will be considered
// even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for
// more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  let evens = s
    .split("")
    .reduce(
      (sum, letter, index) =>
        index == 0 || index % 2 == 0
          ? sum + letter.toUpperCase()
          : sum + letter,
      ""
    );
  let odds = s
    .split("")
    .reduce(
      (sum, letter, index) =>
        index == 0 || index % 2 == 0
          ? sum + letter
          : sum + letter.toUpperCase(),
      ""
    );
  return [evens, odds];
}

console.log(capitalize("abcdefg"));
