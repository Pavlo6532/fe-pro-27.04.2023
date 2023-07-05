"use strict";

class SuperMath {
  check(obj) {
    const validOperations = ["+", "-", "/", "*", "%"];

    if (!validOperations.includes(obj.znak)) {
      console.log("Incorrect operation sign.");
      obj = this.input();
    }

    const confirmMessage = `You want to perform an operation ${obj.znak} with numbers ${obj.X} і ${obj.Y}? (Yes/No): `;
    const userInput = prompt(confirmMessage);

    if (userInput === null) {
      console.log("The program has been interrupted.");
      return;
    }

    if (userInput.toLowerCase() === "yes") {
      const result = this.calculate(obj);
      console.log(`Result: ${result}`);
    } else if (userInput.toLowerCase() === "no") {
      obj = this.input();
      this.check(obj);
    } else {
      console.log('Incorrect input. Please enter "Yes" or "No".');
      this.check(obj);
    }
  }

  input() {
    const X = +prompt("Enter the value of X: ");
    const Y = +prompt("Enter the value of Y: ");
    const znak = prompt("Enter the operation sign (+, -, /, *, %): ");
    return { X, Y, znak };
  }

  calculate(obj) {
    if (obj.znak === "+") {
      return obj.X + obj.Y;
    } else if (obj.znak === "-") {
      return obj.X - obj.Y;
    } else if (obj.znak === "/") {
      return obj.X / obj.Y;
    } else if (obj.znak === "*") {
      return obj.X * obj.Y;
    } else if (obj.znak === "%") {
      return obj.X % obj.Y;
    }
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);
