// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findSingleNumber(nums) {
  return nums.reduce((accumulator, num) => accumulator ^ num, 0);
}

// Test provided input
const nums = [2, 4, 6, 4, 2];

console.log(`Single number: ${findSingleNumber(nums)}`);
