function sameCase(a, b){
  if(a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) return -1;
  else if(a.toUpperCase() === a && b.toUpperCase() === b || a.toLowerCase() === a && b.toLowerCase() === b) return 1;
  else if(a.toUpperCase() === a && b.toLowerCase() === b || a.toLowerCase() === a && b.toUpperCase() === b) return 0;
  
}