//WAP to covert the celsious to fehrenhiet
let temp = 10;
function feh() {
  let f = (temp * 9) / 5 + 32;
  console.log(f);
}
feh();

//WAP to covert the fehrenhiet to celsious

function cel() {
  let celsious = ((temp - 32) * 5) / 9;
  console.log(celsious);
}
cel();
