// problem 1
const addTwoNumbers = (num1 = 2, num2) => {
  return num1 + num2;
};

console.log(addTwoNumbers(2));

// problem 2
const convertHoursToMinutes = (hours) => hours * 60;

console.log(convertHoursToMinutes(4));

// problem 3
const getGreeting = (name) => `Hello ${name}`;

console.log(getGreeting('Brett'));

// problem 4
const addAndMultiplyBy5 = (num1 = 10, num2) => {
  return num1 * num2;
};

console.log(addAndMultiplyBy5(5));

// problem 5
const multiplyAndDivideBy5 = (num1 = 2, num2) => num1 / num2;

console.log(multiplyAndDivideBy5(2));

// problem 6
const subtractTwoNumbers = (num1 = 23, num2) => {
  return num1 - num2;
};

console.log(subtractTwoNumbers(12));

// problem 7
const getCircleCircumference = (radius) => {
  return 2 * Math.PI * radius;
};

console.log(getCircleCircumference(5222));

// problem 8

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName('Jack', 'Almadjian'));

// problem 9(end)

const cube = (number) => {
  return Math.pow(number, 3);
};

console.log(cube(2));
