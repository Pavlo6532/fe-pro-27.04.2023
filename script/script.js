let length = parseInt(prompt("Enter the length of the array:"));
let array = [];

for (let i = 0; i < length; i++) {
  let input = prompt("Enter an array element:");
  array.push(input);
}

console.log("Initial array:", array);

let numbers = array.filter(function (element) {
  return !isNaN(parseFloat(element));
});
numbers.sort(function (a, b) {
  return parseFloat(a) - parseFloat(b);
});

let strings = array.filter(function (element) {
  return isNaN(parseFloat(element));
});
strings.sort();

let sortedArray = numbers.concat(strings);

console.log("Sorted array:", sortedArray);

sortedArray.splice(1, 4);

console.log("The array after removing elements 2 through 4:", sortedArray);
