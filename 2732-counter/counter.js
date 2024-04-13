function createCounter(n) {
  let count = n;
  return function() {
    const currentCount = count;
    count++;
    return currentCount;
  }
}