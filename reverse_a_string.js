// Creating a function that will reverse a string using JavaScript
// Input will be a string; for example, "fuddy duddy"
//Output will be the input reversed "yddud ydduf"

// this is an iterative way of solving the problem

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'improve your input, yo';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

//using built in methods

function reverseString2(str) {
  return str.split('').reverse().join('');
}

// using ES6 arrow functions

const reverse3 = str => str.split('').reverse().join('');

//using destructuring assignment

const reverse4 = str => [...str].reverse().join('');
