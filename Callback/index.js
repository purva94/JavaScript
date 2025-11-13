// Callback -  a function that is passed as an argument to another function

//  used to handle the asynchronous perations :
// 1> reading a file .
// 2> netwirk request .
// 3> intracting with databases.
// hey when you done call this next

function hello(Callback) {
  console.log("heyy");
  Callback();
}

function goodbye() {
  console.log("GoodBye!");
}
hello(goodbye);

function sum(Callback, a, b) {
  let result = a + b;
  Callback(result);
}
function display(result) {
  console.log(result);
}
sum(display, 1, 2);
