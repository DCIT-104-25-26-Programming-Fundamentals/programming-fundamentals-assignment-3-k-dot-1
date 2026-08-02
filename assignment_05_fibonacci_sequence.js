// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
function printFibonacciSequence(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be positive.");
        return;
    }

    let sequence = [];
    
    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }

    let t1 = 0;
    let t2 = 1;

    for (let i = 3; i <= n; i++) {
        let nextTerm = t1 + t2;
        sequence.push(nextTerm);
        t1 = t2;
        t2 = nextTerm;
    }

    console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
function isFibonacciNumber(num) {
    if (num < 0) {
        return false;
    }
    
    if (num === 0 || num === 1) {
        return true;
    }

    let t1 = 0;
    let t2 = 1;
    let current = t1 + t2;

    while (current <= num) {
        if (current === num) {
            return true;
        }
        t1 = t2;
        t2 = current;
        current = t1 + t2;
    }

    return false;
}

// -----------------------------------------------------------------------------
// Main execution function
// -----------------------------------------------------------------------------
function main() {
    console.log("Select Task:");
    console.log("1. Print First N Terms (Part A)");
    console.log("2. Check if Number is Fibonacci (Part B)");
    let choice = readlineSync.questionInt("Enter choice (1-2): ");

    if (choice === 1) {
        let n = readlineSync.questionInt("How many terms? ");
        printFibonacciSequence(n);
    } 
    else if (choice === 2) {
        let num = readlineSync.questionFloat("Enter a number to check: ");

        if (isFibonacciNumber(num)) {
            console.log(`${num} is a Fibonacci number.`);
        } else {
            console.log(`${num} is NOT a Fibonacci number.`);
        }
    } 
    else {
        console.log("Invalid choice selected.");
    }
}

main();

