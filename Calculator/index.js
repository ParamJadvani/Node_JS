const prompt = require("prompt-sync")();
const { sum, subtraction, multiplication, division } = require("./math");

console.log("--- Calculator ---\n");

const calculator = () => {
  console.log(
    "1) Sum\n2) Subtraction\n3) Multiplication\n4) Division\n5) Modulus\n0) Exit\n"
  );
  const choice = parseInt(prompt("Enter your choice: "));
  if (choice === 0) {
    console.log("Exiting...\n");
    return;
  }
  const num1 = parseFloat(prompt("Enter the first number: "));
  const num2 = parseFloat(prompt("Enter the second number: "));
  let result;
  switch (choice) {
    case 1:
      result = sum(num1, num2);
      console.log(`Sum : ${result}\n`);
      break;
    case 2:
      result = subtraction(num1, num2);
      console.log(`Subtraction : ${result}\n`);
      break;
    case 3:
      result = multiplication(num1, num2);
      console.log(`Multiplication : ${result}\n`);
      break;
    case 4:
      result = division(num1, num2);
      console.log(`Division : ${result}\n`);
      break;
    case 5:
      result = num1 % num2;
      console.log(`Modulus : ${result}\n`);
      break;
    default:
      console.log("Invalid choice! Please try again.\n");
      break;
  }
  calculator();
};

calculator();
