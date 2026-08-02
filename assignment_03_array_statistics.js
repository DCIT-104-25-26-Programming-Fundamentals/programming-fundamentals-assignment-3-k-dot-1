// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// Function to calculate the sum of array elements
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to calculate the average of array elements
function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    return calculateSum(arr) / arr.length;
}

// Function to find the maximum value in the array
function findMaximum(arr) {
    if (arr.length === 0) return 0;
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

// Function to find the minimum value in the array
function findMinimum(arr) {
    if (arr.length === 0) return 0;
    let minVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

// Main function to handle user input and computation
function main() {
    let n = readlineSync.questionInt("How many numbers? ");
    
    // Validate that N is a positive integer
    if (n <= 0) {
        console.log("Error: Number of elements must be positive.");
        return;
    }
    
    let numbers = [];
    
    // Read numbers from the user
    for (let i = 0; i < n; i++) {
        let num = readlineSync.questionFloat(`Enter number ${i + 1}: `);
        numbers.push(num);
    }
    
    // Compute statistics using the functions
    let sum = calculateSum(numbers);
    let average = calculateAverage(numbers);
    let maximum = findMaximum(numbers);
    let minimum = findMinimum(numbers);
    
    // Print the results
    console.log("\nResults:");
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${maximum}`);
    console.log(`Minimum: ${minimum}`);
}

// Execute the main function
main();

