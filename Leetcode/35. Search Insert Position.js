var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  if(target<nums[low]) return 0;
  if(target>nums[high]) return nums.length
  while (low <= high) {
    let mid = low + (high - low) / 2;
    if (target === nums[mid]) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}