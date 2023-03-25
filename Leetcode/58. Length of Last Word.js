var lengthOfLastWord = function(s) {
  const spliteds = s.trim().split(' ');
  return spliteds[spliteds.length - 1].length;
};