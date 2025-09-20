//switch case is efficient to replace many if else statement

let day = 6;

switch (day) {
  case 1:
    console.log("it's a monday");
    break;
  case 2:
    console.log("it's a tuesday");
    break;
  case 3:
    console.log("it's a wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("it's a friday");
    break;
  case 6:
    console.log("it's a saturday");
    break;
  case 7:
    console.log("it's a sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}
