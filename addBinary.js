// Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
// 1010
var addBinary = function (a, b) {
  let a1 = 0n;
  let aLength = BigInt(a.length - 1);
  [...a].forEach((elm) => {
    a1 += BigInt(elm) * 2n ** aLength;
    aLength--;
  });

  let b1 = 0n;
  let bLength = BigInt(b.length - 1);
  [...b].forEach((elm) => {
    b1 += BigInt(elm) * 2n ** bLength;
    bLength--;
  });

  let ab = a1 + b1;

  if (ab === 0n) return "0";

  let arr = [];
  while (ab > 0n) {
    arr.push((ab % 2n).toString());
    ab = ab / 2n;
  }
  return arr.reverse().join("");
};

// console.log(addBinary("1010", "1011"));
// console.log(addBinary("0", "1"));
const a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";

const b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a, b));
