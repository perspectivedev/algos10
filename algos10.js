/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const expectedA1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expectedA2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expectedA3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
  // code here
  let newArr = [];
    for(var i = 0; i < twoDimArr.length; i++){
        for(var j = 0; j < twoDimArr[i].length; j++){
            if(twoDimArr[i][j] === undefined){
                continue;
            }
            newArr.push(twoDimArr[i][j]);
        }
    }
    return newArr;
}

console.log(flatten2dArray(twoDimArr1), expectedA1);
console.log(flatten2dArray(twoDimArr2), expectedA2);
console.log(flatten2dArray(twoDimArr3), expectedA3);

/*****************************************************************************/

/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  // code here
  if(nums.length < 1){
    return null;
  }
  let highest = nums[0];
  let secondHighest = -Infinity;
  for(var i = 1; i < nums.length; i++){
    if(nums[i] > highest){
        secondHighest = highest;
        highest = nums[i];
    }else if(nums[i] > secondHighest){
        secondHighest = nums[i];
    }
    
  }
  if(highest === secondHighest){
    return null;
  }
  return secondHighest;
}

console.log(secondLargest(nums1), expected1);
console.log(secondLargest(nums2), expected2);
console.log(secondLargest(nums3), expected3);
console.log(secondLargest(nums4), expected4);
console.log(secondLargest(nums5), expected5);
console.log(secondLargest(nums6), expected6);
console.log(secondLargest(nums7), expected7);
console.log(secondLargest(nums8), expected8);