// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];
fruits.push("kela"); //it'll add at the end
fruits.unshift("paypaya"); //it'll add at the beginning
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[5]); //it'll give us the undefined
let num = fruits.length;
let index = fruits.indexOf("kela");
console.log(num);
console.log(index);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("gjh");
//we can travrse an array in javasscript this way as well
for (let fruit of fruits) {
  console.log(fruit);
}

//Print the array in a revrse order

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
console.log("le bhen sorted array");

//for sort the array
fruits.sort();
console.log(fruits);

console.log("now sort the array in a revrse order");
fruits.sort().reverse();
console.log(fruits);
