// Write a function named repeater() that takes two arguments (a string and a
// number), and returns a new string where the input string is repeated that
// many times.

// Example: (Input1, Input2 --> Output) "a", 5 --> "aaaaa"

function repeater(string, n) {
  const stringArr = [];
  for (i = 1; i <= n; i++) {
    stringArr.push(string);
  }
  return stringArr.join("");
}

console.log(repeater("Na", 16));
