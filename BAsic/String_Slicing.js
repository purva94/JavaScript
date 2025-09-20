// String slicing -- creating a substring from a portion of another stirng
// string.slice(start.end)
// remember that last index is exclusive .

//WAP to print full name and then slice the string as first name and full name

let fullname = "Purva Shrivastava";

// let firstname = fullname.slice(0, 6);
// console.log(firstname); //purva
// let lastname = fullname.slice(6, 18);
// console.log(lastname); //Shrivastava

// let firstChar = fullname.slice(0, 1);
// console.log(firstChar); //p

// let Secondchar = fullname.slice(1, 2);
// console.log(Secondchar); //u

// let lastchar = fullname.slice(-1);
// console.log(lastchar); //
// console.log(fullname);
// console.log(fullname.length);

let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstname);
console.log(lastname);
