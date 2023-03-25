var removeDuplicates = function (nums) {
  let j = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== nums[j]){
          j++
          nums[j] = nums[i];
      }
  }
  return j + 1
};