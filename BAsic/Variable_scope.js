// Variable Scope= where a variable is recognized
// and accessible (global Vs local)

let b = 18; //global scope can be accessible throught the program
function f1() {
  let a = 9; //local scope only accesible inside the function
  console.log(a);
  console.log(b);
}
function f2() {
  console.log(b);
}
f2();
f1();
