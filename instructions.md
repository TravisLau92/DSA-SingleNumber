Title: Find Single Number in an Array
Objective:
In this coding exercise, you will create a JavaScript function that finds the single number in an array of integers. The array will contain pairs of numbers, except for one number that appears only once. Your task is to identify and return this single number.

When using the following input:
```js
const nums = [2, 4, 6, 2, 4];
console.log('Single number:', findSingleNumber(nums));
```
For example, after implementing the function, you should be able to produce the following output:
```js
Single number: 6
```
Helpful resources:
- The reduce() method documentation on the Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
- The bitwise XOR operator (^) documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
<details>
<summary>Hints</summary>

1. Create a function `findSingleNumber(nums)` that accepts an array `nums` as an argument.
2. Use the `reduce()` method to iterate over the array and perform the XOR operation on each element.
3. Start with an initial value of 0 and XOR each element of the array with the accumulator.
4. After the reduce operation, the accumulator will hold the single number that appears only once.
5. Return the accumulator as the result.
6. Call the function with an appropriate array of numbers and log the result using template literals.
7. Make sure to use camel case for variable names and `reduce()` method for the iteration.
8. Use template literals when logging the output to the console.
</details>
---