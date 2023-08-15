/* Your JS goes in this file */

const isAdult = (age) => {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
};

console.log(isAdult(121));

const didStudentPass = (score) => {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
};

console.log(didStudentPass(111));

const gradeCalculator = (score) => {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A ';
  } else {
    return 'A++';
  }
};

console.log(gradeCalculator(100));

const seasonMessenger = (season) => {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
};

console.log(seasonMessenger('spring'));

const dayDetector = (dayOfTheWeek) => {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'have a good weekend!';
  } else {
    return 'Its a weekday';
  }
};

console.log(
  dayDetector(new Date().toLocaleString('default', { weekday: 'long' }))
);
