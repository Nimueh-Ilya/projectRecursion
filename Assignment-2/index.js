function mergeSort(arr) {
  console.log(arr);
  if (arr.length == 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle, arr.length);
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  return mergeArray(sortedLeft, sortedRight);
}
function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}
const array = [3, 2, 1, 13, 8, 5, 0, 1];
const array0 = [6, 105, 79, 2, 100, 110, 98, 2, 15];
const array1 = [6, 3, 1, 4];
const array2 = [1, 13];
console.log(mergeSort(array0));
