// search insert position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (nums, target) {
  const findTarget = nums.find((num) => num == target);

  if (findTarget) {
    return nums.indexOf(target);
  } else {
    let a;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target && target < nums[i + 1]) {
        return i + 1;
      }
      if (target > nums[nums.length - 1]) {
        return nums.length;
      }
      if (target < nums[0]) {
        return 0;
      }
    }
  }
};

const nums = [1, 3, 4, 6];
const target = 7;

console.log(searchInsert(nums, target));
