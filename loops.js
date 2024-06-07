// iterates using indices-for loop
const multiply = (num) => {
  let newArray = [];

  for (let i = 0; i < num.length; i++) {
    // console.log({i});
    const multiplyByTwo = num[i] * 2;
    newArray.push(multiplyByTwo);
  }
  return newArray;
};

console.log(multiply([2, 3, 4, 5, 6, 7, 8]));

// for of gets the element and does not use indices

const totalSum = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    if (num === 5) {
      continue;
    }
    // console.log({num});
    sum += num;
  }
  return sum;
};
console.log(totalSum([2, 3, 4, 5, 6, 7]));

// continue-skip and continue
// break- stops and continues

// while checks condition first then execution later
const students = (studentNames) => {
  while (studentNames.length > 2) {
    console.log("Teach students");
    studentNames.pop();
    if (studentNames.length === 2) {
      // console.log("You are left with two students");
      break;
    }
  }
};
students(["Ema", "Eve", "Ann", "Jane"]);

// do while execute first then condition

const kickBall = (leg) => {
  do {
    console.log("Kick the ball");
  } while (leg);
};
// kickBall(true)
kickBall(false);
