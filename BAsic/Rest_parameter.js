// rest parameter = (..rest)allow a function work with a variable number of arguments by bunding them into an array

//spread  = expands (unpack) the array inot the seprate elements.
//rest    = bundeles seprate element into an array.

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log(`your total is ${total}`);
