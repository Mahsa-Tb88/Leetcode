// // Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//  and two integers m and n,
//  representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
//  but instead be stored inside the array nums1. To accommodate this,
//  nums1 has a length of m + n,
//  where the first m elements denote the elements that should be merged,
//  and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function (nums1, m, nums2, n) {

  nums2.forEach((el, index) => {
    nums1[m] = el;
    m++;
  });

  nums1.sort((a,b)=>a-b);
  return nums1;
};

// let nums1 = [1, 2, 3, 0, 0, 0];
let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];

// let m = 3;
let m = 6;
// let nums2 = [2, 5, 6];
let nums2 = [1, 2, 2];
let n = 3;

console.log(merge(nums1, m, nums2, n));
