let operation = prompt("What do you want to do? (add, sub, mult, div)");

let operand1 = parseFloat(prompt("Enter first number:"));
let operand2 = parseFloat(prompt("Enter second number:"));

if (operation === "add") {
  let result = operand1 + operand2;
  alert(`${operand1} + ${operand2} = ${result}`);
} else if (operation === "sub") {
  let result = operand1 - operand2;
  alert(`${operand1} - ${operand2} = ${result}`);
} else if (operation === "mult") {
  let result = operand1 * operand2;
  alert(`${operand1} * ${operand2} = ${result}`);
} else if (operation === "div") {
  if (operand2 === 0) {
    alert("False: division by zero");
  } else {
    let result = operand1 / operand2;
    alert(`${operand1} / ${operand2} = ${result}`);
  }
} else {
  alert("Error: please select an action");
}
