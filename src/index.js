/**
 * Sums two numbers
 *
 * @param {number} a first number
 * @param {number} b secund number
 */
function sum(a, b) {
    return a + b;
};

/**
 * Subtracts two numbers
 *
 * @param {number} a first number
 * @param {number} b secund number
 */
function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

module.exports = {
    sum,
    subtract,
    multiply,
    divide
};