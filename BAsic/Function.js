// function = a section of reusable code .
// declare code at once, and use it whenever you want .
//call the function to execute that code .

function happybirthday(username, age) {
  //parameters of the function the order of parameter is also matter
  console.log("Happy birthday Dear");
  console.log(`happy birthday dear ${username}`);
  console.log(`you are ${age} year's old girl`);
}
happybirthday("Purva", 21); //argument of a function

function add(a, b) {
  let result = a + b;
  return result;
  //   console.log(result);
}
let c = add(6, 6);
console.log(c);

//WAP to check wether the number is even or odd

function Even_odd(number) {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // in simple we can do this thing by using ternary operator
  return number % 2 === 0 ? true : false;
}
console.log(Even_odd(130));

//WAP to check the mail is valid or not

function check(mail) {
  return mail.includes("@") ? true : false;
  //   if (mail.includes("@")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
console.log(check("shpurva6gmail.com"));
