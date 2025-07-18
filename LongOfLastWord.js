// Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function (s) {
  let list = s.split(" ");
  list = list.filter((l) => l !== "");
  return list[list.length - 1].length;
};

s = "Today is a nice day    ";
console.log(lengthOfLastWord(s));
