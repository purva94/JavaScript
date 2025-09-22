const text = document.getElementById("text");
const toFehrenhiet = document.getElementById("toFehrenhiet");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;
function convert() {
  if (toFehrenhiet.checked) {
    temp = Number(text.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (tocelsius.checked) {
    temp = Number(text.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°c";
  } else {
    result.textContent = "Please select the unit";
  }
}
