const flip = (d, a) => {
  if (d == "R") return a.sort((w, e) => w - e);
  else if (d == "L") return a.sort((w, e) => e - w);
};
