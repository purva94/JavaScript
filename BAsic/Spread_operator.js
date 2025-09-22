// spread operator  ... allows  an iterable such as an
// array or string to be expended into seprate elemnts

let array = [1, 2, 3, 4, 5, 6];
// let maximum = Math.max(array);  ➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️  it'll give the result as NaN
let maximum = Math.max(...array); //➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️ it'll gice the result as 6
console.log(maximum);

let minimum = Math.min(...array);
console.log(minimum);

//WAP to print the all the seprate letter of your name

let name = "Purva Shrivastava";
let letter = [...name];
console.log(letter);

let firstname = ["purva"];
let lastname = ["shrivastava"];
let result = [...firstname, ...lastname];
console.log(result);
