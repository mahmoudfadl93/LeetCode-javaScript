function maxSubArray(nums) {
  //   let db = [nums[0]];

  //   let maxNumber = nums[0];

  //   for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i];
  //     db[i] = Math.max(num, num + db[i - 1]);
  //     maxNumber = Math.max(maxNumber, db[i]);
  //   }

  //   return maxNumber;

  var prev = 0;
  var max = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    // Compare previous contiguous sum with current number
    prev = Math.max(prev + nums[i], nums[i]);
    // Check if the current prev is the greatest sum
    max = Math.max(max, prev);
  }
  return max;
}

module.exports = maxSubArray;
