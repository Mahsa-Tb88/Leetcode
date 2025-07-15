// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// const myList = ["cir","car"];
// const myList = ["dog", "racecar", "car"];
// const myList = ["reflower", "flow", "flight"];
// const myList = ["flower", "flow", "flight"];
const myList=["flower","flow","flight"]

function getF(myList) {
  let f = "";
  for (let l = 0; l < myList[0].length; l++) {
    for (let i = 1; i < myList.length; i++) {
      if (myList[0][l] != myList[i][l]) {
        return f;
      }
    }
    f = myList[0].slice(0, l + 1);
  }
  return f;
}

console.log("f...", getF(myList));
