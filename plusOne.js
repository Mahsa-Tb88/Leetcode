// plus one
// You are given a large integer represented as an integer array digits,
//  where each digits[i] is the ith digit of the integer.
//  The digits are ordered from most significant to least significant in left-to-right order.
//  The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function (digits) {
  let list = digits.join("");
  const num = Number(list);

  if (num < 53 ** 2) {
    list = num + 1;
  } else {
    list = BigInt(list) + 1n;
  }
  list = list.toString().split("");
  
  list = list.map((l) => {
    return Number(l);
  });

  return list;
};

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// const digits = [9, 9];
// const digits = [1, 2, 3];
console.log(plusOne(digits));
