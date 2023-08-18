/* exported reverse */
const reverse = (array) => {
  const output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
};

console.log(reverse(['foo', 'bar', 'baz']));
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([false, true, false, true]));
console.log(reverse([]));
