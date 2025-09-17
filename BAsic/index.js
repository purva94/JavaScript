// document.getElementById("myh1").textContent =
//   " i am gonna fuck you, no i am not feeling well";
// document.getElementById("myp").textContent =
//   "no matter what i am goona fuck u babe";

// let n = 19;
// let firstname = "purva";
// console.log(typeof firstname);
// console.log(typeof n);
// console.log(`my age is ${n} old`);
// console.log(`my name is ${firstname}`);
// let s = "radhe";
// console.log(`i really love ${s}`);

// how to accept the user input
// 1.  easy way = window input
// 2. professional way = html textbox

// let username;  here is the only declaration
// username = window.prompt("hey! what is ur user name ");

// let username;
//  now here we are learning the second type
// document.getElementById("Mysubmit").onclick = function () {
//   username = document.getElementById("mytext").value;
//   console.log(username);
//   document.getElementById("myh1").textContent = `hello ${username}`;
// };

//type conversion  of number
/*let age;
age = window.prompt("hey what is your age ");
age = Number(age);
age += 1;
console.log(age);*/

/*let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(x);
x = Boolean(x);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

//const variable that cann't be changed
// and WAP to calculate the curcumfrences of a circle  (Circoferences = 2*pi*r)
// const pi = 3.141;
// let r;
// let curcumferences;
// r = window.prompt("write the radious of circle");
// r = Number(r);
// document.getElementById("Mysubmit").onclick = function () {

//   curcumferences = 2 * pi * r;
//   console.log(curcumferences);
// };

//Purva see this to learn lot of contents ;
/*let radious;
let PI = 3.141;
let curcumferences;

document.getElementById("Mysubmit").onclick = function () {
  radious = document.getElementById("mytext").value;
  radious = Number(radious);
  curcumferences = 2 * PI * radious;
  document.getElementById("h-3").textContent = curcumferences + "cm";
};*/

//WAP where sum the two number on the screen

let a, b;
let sum;

document.getElementById("Submit").onclick = function () {
  a = document.getElementById("mytext-1").value;
  a = Number(a);
  b = document.getElementById("mytext-2").value;
  b = Number(b);
  sum = a + b;
  document.getElementById("h-3").textContent = sum;
};
