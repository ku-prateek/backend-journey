function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// call the function
const result_add = add(5, 3);
const result_sub = subtract(5, 3);
const result_mul = multiply(5, 3);
const result_div = divide(5, 3);


// print the result
console.log("Addition: ", result_add);
console.log("Subtraction: ", result_sub);
console.log("Multiplication: ", result_mul);
console.log("Division: ", result_div);
try{
    const result_div_zero = divide(5, 0);
    console.log(result_div_zero);
} catch (error) {
    console.log(error.message);
}