/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let sortArr = numbers.sort((a,b)=> {
        return b-a
    });
    return sortArr[0]
}

module.exports = findLargestElement;