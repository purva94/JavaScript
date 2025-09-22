// Variable Scope= where a variable is recognized
// and accessible (global Vs local)

let b = 18; //global scope
function f1() {
  let a = 9; //local scope
  console.log(a);
  console.log(b);
}
function f2() {
  console.log(b);
}
f2();
f1();
