// Your task is to remove all duplicate words from a string, leaving only single
// (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma
// delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  let wordArray = s.split(" ");
  let newArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (!newArray.includes(wordArray[i])) {
      newArray.push(wordArray[i]);
    }
  }
  return newArray.join(" ");
}

console.log(removeDuplicateWords("boy girl boy woman man woman boy girl"));
