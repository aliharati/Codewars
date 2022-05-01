// Your task is to write function factorial.

function factorial(n) {
  let arr = [];
  if (n == 0) {
    return 1;
  }
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reduce((sum, x) => sum * x);
}

console.log(factorial(24));
