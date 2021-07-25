function maxProduct(nums) {
  //   let maxtilIndex = nums[0];
  //   let mintilIndex = nums[0];

  //   let maxNumber = nums[0];

  //   for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i];

  //     maxtilIndex[i] = Math.max(
  //       num,
  //       num * maxtilIndex[i - 1],
  //       num * mintilIndex[i - 1]
  //     );

  //     maxtilIndex[i] = Math.min(
  //       num,
  //       num * maxtilIndex[i - 1],
  //       num * mintilIndex[i - 1]
  //     );

  //     maxNumber = Math.max(maxNumber, maxtilIndex[i]);
  //   }
  //   return maxNumber;



  

  // Max product in the current contiguous array
  let currentMax = nums[0];
  // Mind product in the current contiguous array. We need this value in case we encounter 2 negative numbers whose product could potentially give us the max product of the entire array
  let currentMin = nums[0];
  // Max product of a contiguous array
  let finalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = currentMax;
    // Because we are looking for a contiguous subarray product, the current max must contain the current number in the array.
    currentMax = Math.max(
      Math.max(currentMax * nums[i], currentMin * nums[i]),
      nums[i]
    );
    // Use temp here in case the previous currentMax was negative
    currentMin = Math.min(
      Math.min(temp * nums[i], currentMin * nums[i]),
      nums[i]
    );
    // Record highest max at the end of every contiguous subarray
    finalMax = Math.max(currentMax, finalMax);
  }

  return finalMax;
}

module.exports = maxProduct;
