function fibsRecursion(n) {
  let arr = [];
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  }
  return arr
    .concat(fibsRecursion(n - 1))
    .concat(
      fibsRecursion(n - 1)[fibsRecursion(n - 1).length - 1] +
        fibsRecursion(n - 1)[fibsRecursion(n - 1).length - 2]
    )
    .splice(0, n);
}
function fibs(n) {
  let arr = [];
  for (i = 0; i <= n - 1; i++) {
    if (i == 0) {
      arr.push(0);
    } else if (i == 1 || i == 2) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}
console.log(fibsRecursion(8));
console.log(fibs(8));
