// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// ==========================================================================
const readlineSync = require('readline-sync');

// Function to print a matrix neatly in a grid format
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += String(matrix[i][j]).padStart(5, ' ');
        }
        console.log(rowStr);
    }
}

// Function to read a matrix from the user
function readMatrix(rows, cols, matrixName) {
    console.log(`Enter elements for ${matrixName}:`);
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question(`Enter row ${i + 1} (${cols} numbers separated by spaces): `);
        let row = rowInput.trim().split(/\s+/).map(Number);
        
        // Validate row length
        if (row.length !== cols) {
            console.log(`Error: Expected ${cols} numbers, but got ${row.length}. Please re-enter this row.`);
            i--; // Repeat this row
            continue;
        }
        matrix.push(row);
    }
    return matrix;
}

// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];

    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
function addMatrices(matA, matB) {
    let rows = matA.length;
    let cols = matA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matA[i][j] + matB[i][j]);
        }
        result.push(row);
    }

    return result;
}

// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
function multiplyMatrices(matA, matB) {
    let rowsA = matA.length;
    let colsA = matA[0].length;
    let rowsB = matB.length;
    let colsB = matB[0].length;

    if (colsA !== rowsB) {
        return null; // Dimension mismatch
    }

    let result = [];
    for (let i = 0; i < rowsA; i++) {
        let row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matA[i][k] * matB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}

// -----------------------------------------------------------------------------
// Main execution function
// -----------------------------------------------------------------------------
function main() {
    console.log("Select Matrix Operation:");
    console.log("1. Transpose Matrix (Part A)");
    console.log("2. Add Two Matrices (Part B)");
    console.log("3. Multiply Two Matrices (Part C)");
    let choice = readlineSync.questionInt("Enter choice (1-3): ");

    if (choice === 1) {
        let rows = readlineSync.questionInt("Enter number of rows: ");
        let cols = readlineSync.questionInt("Enter number of columns: ");

        if (rows <= 0 || cols <= 0) {
            console.log("Error: Dimensions must be positive.");
            return;
        }

        let matrix = readMatrix(rows, cols, "Matrix");
        let transposed = transposeMatrix(matrix);

        console.log("\nOriginal Matrix:");
        printMatrix(matrix);

        console.log("\nTransposed Matrix:");
        printMatrix(transposed);

    } else if (choice === 2) {
        let rows = readlineSync.questionInt("Enter number of rows for both matrices: ");
        let cols = readlineSync.questionInt("Enter number of columns for both matrices: ");

        if (rows <= 0 || cols <= 0) {
            console.log("Error: Dimensions must be positive.");
            return;
        }

        let matA = readMatrix(rows, cols, "Matrix A");
        let matB = readMatrix(rows, cols, "Matrix B");

        let sumMatrix = addMatrices(matA, matB);

        console.log("\nSum of Matrices (A + B):");
        printMatrix(sumMatrix);

    } else if (choice === 3) {
        let rowsA = readlineSync.questionInt("Matrix A - Enter rows: ");
        let colsA = readlineSync.questionInt("Matrix A - Enter columns: ");

        let rowsB = readlineSync.questionInt("Matrix B - Enter rows: ");
        let colsB = readlineSync.questionInt("Matrix B - Enter columns: ");

        if (colsA !== rowsB) {
            console.log("Error: Number of columns in Matrix A must equal number of rows in Matrix B.");
            return;
        }

        let matA = readMatrix(rowsA, colsA, "Matrix A");
        let matB = readMatrix(rowsB, colsB, "Matrix B");

        let productMatrix = multiplyMatrices(matA, matB);

        if (productMatrix !== null) {
            console.log("\nMatrix Product (A x B):");
            printMatrix(productMatrix);
        } else {
            console.log("Multiplication failed due to dimension mismatch.");
        }

    } else {
        console.log("Invalid choice selected.");
    }
}

main();

