// climbing stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

var climbStairs = function (n) {
  const num = parseInt(n / 2);

  let totalShapes = 1;
  // i says home many 2s we have
  for (let i = 1; i <= num; i++) {
    let numberOfOne = n - 2 * i;
    let lengthOfNumber = numberOfOne + i;
    console.log("i is ", i, " ,,,, ", " lengthOfNumber", lengthOfNumber);
    console.log("i is ", i, " ,,,, ", " numberOfOne", numberOfOne);
    // calculate factorial
    let arr = [];
    [lengthOfNumber, numberOfOne, i].forEach((el) => {
      let m = el;
      let factorial = el == 0 ? 1 : el;
      while (m - 1 > 0) {
        factorial = factorial * (m - 1);
        m = m - 1;
      }
      arr.push(factorial);
      console.log("i is ", i, " ,,,, ", " arr", arr);
    });

    let shapes = arr[0] / (arr[1] * arr[2]);
    totalShapes = totalShapes + shapes;
  }

  return totalShapes;
};

console.log(climbStairs(5));
