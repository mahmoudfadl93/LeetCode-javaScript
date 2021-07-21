function canJump(nums) {
  // let dpPostions = new Array(nums.lemgth).fill(false);
  // dpPostions[0] = true;

  // for (let j = 0; j < nums.length; j++) {
  //     for (let i = 0; i < j; i++) {
  //         if (dpPostions[i] && i + nums[i] >= j)  {
  //             dpPostions[j] = true;
  //             break;
  //         }

  //     }
  // }

  // return dpPostions[dpPostions.length - 1];

  // The first coincidence will definitely be reached
  if (nums.length < 2) {
    return true;
  }
  let pos = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (pos >= i) {
      // If the position can be reached, update the maximum position that can be reached from the position
      pos = Math.max(pos, i + nums[i]);
    }
    // can reach the last digit
    if (pos >= nums.length - 1) {
      return true;
    }
  }
  return false;
}

module.exports = canJump;
