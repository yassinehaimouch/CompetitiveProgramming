function pillars(numPill, dist, width) {
  const c = dist * 100;
  if (numPill <= 0 || numPill == 1) {
    return 0;
  } else {
    return numPill * width + c * (numPill - 1) - 2 * width;
  }
}
