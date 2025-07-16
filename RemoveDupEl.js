// const a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const a = [1, 1, 2];

var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
    console.log(nums);
  }

  return k;
};

console.log(removeDuplicates(a));
