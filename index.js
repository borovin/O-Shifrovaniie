const hrstart = process.hrtime()
const fs = require('fs');

const inp = fs.readFileSync('input.txt', 'utf-8').split('\n');
const string = inp[0];
const template = inp[1].split('').sort().join('');
let charIndex = 0;
let result = 0;
let queue = [];

while (charIndex < string.length) {
  const currentChar = string[charIndex];
  if (template.indexOf(currentChar) >= 0) {
    queue.push(currentChar);
  } else {
    queue = [];
  }

  if (queue.length === template.length) {
    if (queue.slice().sort().join('') === template) {
      result++;
    }
    queue.shift();
  }

  charIndex++;
}

console.log(result);
const hrend = process.hrtime(hrstart);
console.log(`${hrend[1]/1000000}ms`);