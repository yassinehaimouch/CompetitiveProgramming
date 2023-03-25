var findMedianSortedArrays = function (nums1, nums2) {
  const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = sortedArray.length;
  let count = 0;
  for(const element of sortedArray){
      if(element == 0){
          count++;
      }
  }
  if(count === len){
      return 0;
  }

  else if(len <= 1){
      return sortedArray[0];
  }
  else if(len === 2){
      return (sortedArray[0] + sortedArray[1]) / 2;
  }
  else if (len % 2 !== 0) {
      return sortedArray[Math.floor(len / 2)];
  } else if (len % 2 === 0) {
      let min = (len/2) - 1;
      let max = (len/2);
      return (sortedArray[min] + sortedArray[max]) / 2;
  }
};