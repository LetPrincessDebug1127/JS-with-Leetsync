/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i],i));
  }
  return result;
}
const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
///