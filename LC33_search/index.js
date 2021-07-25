// function findMinIdex(rotatedSortedArr) {
//   let left = 0;
//   let right = rotatedSortedArr - 1;

//   if (rotatedSortedArr.length === 1) {
//     return 0;
//   }
//   if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
//     return 0;
//   }

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
//       return mid;
//     }
//     if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) {
//       return mid + 1;
//     }

//     if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
// }

// function binarySearch(num, target, left, right) {
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

function search(nums, target) {
//   const minIdx = findMinIdex(nums);
//   const left = binarySearch(nums, target, 0, minIdx - 1);
//   const right = binarySearch(nums, target, minIdx, minIdx?.length - 1);

//   return Math.max(left, right);


let low = 0;
let high = nums.length - 1;

while (low < high) {
  const middle = Math.floor((low + high) / 2);
  if (nums[middle] == target) return middle;

  // If the left side is ordered
  if (nums[low] <= nums[middle]) {
    // Number is in the left side
    if (target >= nums[low] && target < nums[middle]) {
      high = middle;
    }
    // Number is in the right side
    else {
      low = middle + 1;
    }
  }
  // Right side is ordered
  else {
    // Number is in the right side
    if (target > nums[middle] && target <= nums[high]) {
      low = middle + 1;
    }
    // Number is in the left side
    else {
      high = middle;
    }
  }
}

// Reached the final number; return it if it matches the target, else target was not found
return nums[low] == target ? low : -1;
  
}

module.exports = search;
