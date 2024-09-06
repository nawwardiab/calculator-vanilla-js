class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  // Ratio: returns the height based on the ratio x:y
  ratio(x, y, width) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      typeof width !== "number"
    ) {
      return "Error: All inputs must be numbers.";
    }
    if (x === 0) {
      return "Error: Divisor cannot be zero.";
    }
    const height = (y / x) * width;
    return height;
  }

  // Percentage: returns the percentage of x in y as a string with a '%' sign
  percentage(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    if (y === 0) {
      return "Error: Divisor cannot be zero.";
    }
    const percent = (x / y) * 100;
    return `${percent}%`;
  }

  // Add: returns the sum of x and y
  add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    return x + y;
  }

  // Subtract: returns the difference of y - x
  subtract(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    return x - y;
  }

  // Multiply: returns the product of x and y
  multiply(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    return x * y;
  }

  // Divide: returns the quotient of x divided by y
  divide(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    if (y === 0) {
      return "Error: Divisor cannot be zero.";
    }
    return x / y;
  }

  // Remainder: returns the remainder of x divided by y
  remainder(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    if (y === 0) {
      return "Error: Divisor cannot be zero.";
    }
    return x % y;
  }

  // Elevate: returns x raised to the power of y
  elevate(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Error: Both inputs must be numbers.";
    }
    return x ** y;
  }

  // Square Root: returns the square root of x
  sqrt(x) {
    if (typeof x !== "number") {
      return "Error: Input must be a number.";
    }
    if (x < 0) {
      return "Error: Cannot calculate the square root of a negative number.";
    }
    return Math.sqrt(x);
  }
}

export default Calculator;

/*
console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.remainder(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
*/
