const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mybtn");
const myresult = document.getElementById("myresult");
let age;

mybtn.onclick = function () {
  age = mytext.value;
  age = Number(age);
  if (age >= 100) {
    myresult.textContent = "you are too old to enter this site";
  } else if (age == 0) {
    myresult.textContent = "you can't enter you are just born";
  } else if (age >= 18) {
    myresult.textContent = "you are old enough to enter this site";
  } else if (age < 0) {
    myresult.textContent = "your age cann't be below zero";
  } else {
    myresult.textContent = "you must be 18+ to enter this site";
  }
};
