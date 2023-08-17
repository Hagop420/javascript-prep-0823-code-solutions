/* exported head */
const head = (array) => {
  return array[0];
};

console.log(head(['foo', 'bar', 'baz']));
console.log(head([1, 2, 3, 4, 5]));
console.log(head([false, true, false, true]));
console.log(head([]));

const last = (array) => {
  return array[array.length - 1];
};

console.log(last(['foo', 'bar', 'baz']));
console.log(last([1, 2, 3, 4, 5]));
console.log(last([false, true, false, true]));
console.log(last([]));

const tail = (array) => {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push((array[i - 1] = array[i]));
  }
  return newArr;
};

console.log(tail(['foo', 'bar', 'baz']));
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([false, true, false, true]));
console.log(tail([]));

const initial = (array) => {
  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }

  return output;
};

console.log(initial(['foo', 'bar', 'baz']));
console.log(initial([1, 2, 3, 4, 5, 6]));
console.log(initial([true, false, false, true]));
console.log(initial([]));

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

const compact = (array) => {
  const result = [];

  for (const element of array) {
    if (element) {
      result.push(element);
    }
  }

  return result;
};

console.log(compact(['foo', 'bar', 'baz']));
console.log(compact([1, 2, 3, 4, 5]));
console.log(compact([false, true, false, true]));
console.log(compact([]));
