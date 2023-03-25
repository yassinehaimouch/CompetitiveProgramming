var intersection = function(nums1, nums2) {
  let firstSet = new Set();
  // [1, 2]

  for(let num of nums1){
      firstSet.add(num);
  }

  let interSectionSet = new Set();

  for(let num of nums2){
      if(firstSet.has(num)){
          interSectionSet.add(num);
      }
  }

  return Array.from(interSectionSet)
};