// Complete the method which accepts an array of integers, and returns one of
// the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending
// order "yes, descending" - if the numbers in the array are sorted in a
// descending order "no" - otherwise You can assume the array will always be
// valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let ascendingArr = [];
  let descendingArr = [];
  let ascending = 0;
  let descending = 0;
  ascendingArr = ascendingArr.concat(array);
  descendingArr = descendingArr.concat(array);
  ascendingArr.sort((a, b) => a - b);
  descendingArr.sort((a, b) => b - a);
  for (i = 0; i < array.length; i++) {
    if (array[i] == ascendingArr[i]) {
      ascending += 1;
    }
    if (array[i] == descendingArr[i]) {
      descending += 1;
    }
  }
  if (array.length == ascending) {
    return "yes, ascending";
  } else if (array.length == descending) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow(15, 7, 3, -8));
