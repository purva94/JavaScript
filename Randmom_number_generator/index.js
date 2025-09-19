let button = document.getElementById("b-1");
let l1 = document.getElementById("lebel1");
let l2 = document.getElementById("lable2");
const min = 1;
const max = 6;
let randumnumber;
let randumnumber2;
button.onclick = function () {
  randumnumber = Math.floor(Math.random() * max) + min;
  l1.textContent = randumnumber;
  randumnumber2 = Math.floor(Math.random() * max) + min;
  l2.textContent = randumnumber2;
};
