// Import necessary modules
import readlineSync from "readline-sync"; // For user input
import Calculator from "./Calculator.js"; // Importing the Calculator class

// Instantiate a Calculator object
const calc = new Calculator();

// Function to get a valid number input from the user
function getNumberInput(promptText) {
  while (true) {
    const input = readlineSync.question(promptText); // Prompt user for input
    const number = parseFloat(input); // Convert input to a float number
    if (!isNaN(number)) {
      // Check if the input is a valid number
      return number; // Return the valid number
    } else {
      console.log("Invalid input. Please enter a valid number."); // Prompt again if input is invalid
    }
  }
}

// Function to perform a calculation based on user input
function performCalculation() {
  // Ask the user what operation should be performed
  const operation = readlineSync
    .question(
      "Enter the operation (add, subtract, multiply, divide, remainder, elevate, sqrt, ratio, percentage): "
    )
    .toLowerCase(); // Convert input to lowercase for consistent handling

  // Switch statement to handle different operations
  switch (operation) {
    case "add":
      const addX = getNumberInput("Enter the first number: ");
      const addY = getNumberInput("Enter the second number: ");
      console.log(`Result: ${calc.add(addX, addY)}`);
      break;

    case "subtract":
      const subX = getNumberInput("Enter the first number: ");
      const subY = getNumberInput("Enter the second number: ");
      console.log(`Result: ${calc.subtract(subX, subY)}`);
      break;

    case "multiply":
      const mulX = getNumberInput("Enter the first number: ");
      const mulY = getNumberInput("Enter the second number: ");
      console.log(`Result: ${calc.multiply(mulX, mulY)}`);
      break;

    case "divide":
      const divX = getNumberInput("Enter the numerator: ");
      const divY = getNumberInput("Enter the denominator: ");
      console.log(`Result: ${calc.divide(divX, divY)}`);
      break;

    case "remainder":
      const remX = getNumberInput("Enter the dividend: ");
      const remY = getNumberInput("Enter the divisor: ");
      console.log(`Result: ${calc.remainder(remX, remY)}`);
      break;

    case "elevate":
      const base = getNumberInput("Enter the base number: ");
      const exponent = getNumberInput("Enter the exponent: ");
      console.log(`Result: ${calc.elevate(base, exponent)}`);
      break;

    case "sqrt":
      const sqrtX = getNumberInput("Enter the number: ");
      console.log(`Result: ${calc.sqrt(sqrtX)}`);
      break;

    case "ratio":
      const ratioX = getNumberInput("Enter the x value: ");
      const ratioY = getNumberInput("Enter the y value: ");
      const width = getNumberInput("Enter the width: ");
      console.log(`Result: ${calc.ratio(ratioX, ratioY, width)}`);
      break;

    case "percentage":
      const percentX = getNumberInput("Enter the part value: ");
      const percentY = getNumberInput("Enter the total value: ");
      console.log(`Result: ${calc.percentage(percentX, percentY)}`);
      break;

    default:
      console.log("Unknown operation. Please enter a valid operation.");
      break;
  }

  // Ask the user if they want to perform another calculation
  const continueResponse = readlineSync
    .question("Do you want to perform another operation? (yes/no): ")
    .toLowerCase(); // Convert input to lowercase

  // If the user wants to continue, recursively call performCalculation
  if (continueResponse === "yes") {
    performCalculation(); // Recursive call to repeat the process
  } else {
    console.log("Thank you for using Nawwar's calculator"); // Exit message
  }
}

// Start the calculator by calling performCalculation
performCalculation();
