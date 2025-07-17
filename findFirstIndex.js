// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack,
//  return the index of the first occurrence of needle in haystack,
//  or -1 if needle is not part of haystack

var strStr = function (haystack, needle) {
  const isIncluded = haystack.includes(needle);

  if (isIncluded) {
    let w = "";
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle[0]) {
        for (let j = 0; j < needle.length; j++) {
          if (needle[j] !== haystack[i + j]) {
            break;
          }
          w = w + needle[j];
        }
      }
      if (w == needle) {
        return i;
      } else {
        w = "";
      }
    }
  } else {
    return -1;
  }
};
haystack = "mississippi";
needle = "issip";
console.log(strStr(haystack, needle));
