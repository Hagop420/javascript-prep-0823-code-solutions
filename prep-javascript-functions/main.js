// problem 1
const addTwoNumbers = (num1 = 2, num2 = 2) => {
  return num1 + num2;
};

console.log(addTwoNumbers());

// problem 2
const convertHoursToMinutes = (hours = 3) => hours * 60;

console.log(convertHoursToMinutes());

// problem 3
const getGreeting = (name = 'Brett') => `Hello ${name}`;

console.log(getGreeting());

// problem 4
const addAndMultiplyBy5 = (num1 = 10, num2 = 5) => {
  return num1 * num2;
};

console.log(addAndMultiplyBy5());

// problem 5
const multiplyAndDivideBy5 = (num1 = 2, num2 = 2) => num1 / num2;

console.log(multiplyAndDivideBy5());

// problem 6
const subtractTwoNumbers = (num1 = 23, num2 = 22) => {
  return num1 - num2;
};

console.log(subtractTwoNumbers());

// problem 7
const getCircleCircumference = (radius = 5222) => {
  return 2 * Math.PI * radius;
};

console.log(getCircleCircumference());

// problem 8

const getFullName = (firstName = 'Jack', lastName = 'Almadjian') => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName());

// problem 9(end)

const cube = (number = 2) => {
  return Math.pow(number, 3);
};

console.log(cube());
