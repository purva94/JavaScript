//Counter Program

const deacreasebtn = document.getElementById("deacresebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};
deacreasebtn.onclick = function () {
  count--;
  countlabel.textContent = count;
};
resetbtn.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
