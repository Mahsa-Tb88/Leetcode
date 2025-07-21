// Sqrt(x)
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

var mySqrt = function (x) {
  let high = x;
  let low = 0;
  let mid;
  let sqrt = x == 1 ? 1 : 0;
  mid = (high + low) / 2;
  console.log("mid", mid);
  while (mid * mid > x) {
    mid = mid / 2;
    if (mid * mid > x) {
      high = mid;
    } else {
      low = mid;
    }
    console.log("high", high);
  }
  low = x == 1 ? 1 : parseInt(low);
  for (let i = low; i < high; i++) {
    low = i;
    console.log("i", i);
    console.log("low", low);
    if (low * low <= x) {
      sqrt = low;
      console.log("return .... ", sqrt);
    } else {
      break;
    }
  }

  return sqrt;
};

console.log(mySqrt(1));
