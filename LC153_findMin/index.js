function findMin(nums) {
  //   let left = 0;
  //   let right = nums.length - 1;
  //   if (nums.length === 1) {
  //     return nums[0];
  //   }
  //   if (nums[left] < nums[right]) {
  //     return nums[left];
  //   }
  //   while (left <= right) {
  //     const mid = Math.floor((left + right) / 2);

  //     const leftVal = nums[left];
  //     const midVal = nums[mid];
  //     const leftOfMid = nums[mid - 1];
  //     const rightOfMid = nums[mid + 1];

  //     if (midVal > rightOfMid) {
  //       return rightOfMid;
  //     } else if (leftOfMid > midVal) {
  //       return midVal;
  //     }

  //     if (midVal > leftVal) {
  //       left = mid + 1;
  //     } else {
  //       right = mid - 1;
  //     }
  //   }

  let left  = 0,
      right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    // Move right pointer if num at mid is less than or equal to num at right. This means that the smallest number must be on the left side of mid including mid.
    if (nums[right] >= nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
}

module.exports = findMin;
