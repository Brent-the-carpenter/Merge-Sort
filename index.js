function mergeSort(array) {
  if (array.length <= 1) return array; // this is my base case to make sure the array has been broken down to individual pieces
  const halfway = Math.floor(array.length / 2); // splits array into to halfs
  const firstHalfArray = array.slice(0, halfway);
  const secondHalfArray = array.slice(halfway, array.length);

  const sortedFirstHalf = mergeSort(firstHalfArray); // recursive calling function to get array into individual pieces
  const sortedSecondHalf = mergeSort(secondHalfArray); // same as above

  return merge(sortedFirstHalf, sortedSecondHalf); // calls merge and returns new sorted array by lowest to greatest
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0; // initalizing indexes to keep track of placment in array
  let rightIndex = 0; // ^
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArray.length) {
    // checks for left over pieces just in case when we split the original array in half it dident split evenly
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArray.length) {
    // ^^
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return result; // returns sorted array
}
array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let filteredArray = mergeSort(array1);
let array2 = [105, 79, 100, 110];
console.log(` merged array ${filteredArray}`);
console.log(mergeSort(array2));
