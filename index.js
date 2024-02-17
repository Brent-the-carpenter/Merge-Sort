function mergeSort(array) {
  if (array.length <= 1) return array;
  const halfway = Math.floor(array.length / 2);
  const firstHalfArray = array.slice(0, halfway);
  const secondHalfArray = array.slice(halfway, array.length);

  const sortedFirstHalf = mergeSort(firstHalfArray);
  const sortedSecondHalf = mergeSort(secondHalfArray);

  return merge(sortedFirstHalf, sortedSecondHalf);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
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
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return result;
}
array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let filteredArray = mergeSort(array1);
let array2 = [105, 79, 100, 110];
console.log(` merged array ${filteredArray}`);
console.log(mergeSort(array2));
