
const fs = require("fs");

// Get input from the terminal
function prompt(message) {
    process.stdout.write(message);

    const input = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, input, 0, input.length, null);

    return input.toString("utf8", 0, bytesRead).trim();
}

//----------------------------------------------------------------------//

 // Q1: Check if a number is positive, negative, or zero

let num = Number(prompt("Q1 - Enter a number: "));

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Q2: Check if a number is even or odd

let num2 = Number(prompt("Q2 - Enter a number: "));

if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Q3: Find the largest of two numbers

let a = Number(prompt("Q3(a) - Enter first number: "));
let b = Number(prompt("Q3(b) - Enter second number: "));

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both are equal");
}


 // Q4: Assign a grade based on percentage

let marks = Number(prompt("Q4 - Enter your percentage: "));

if (marks >= 80 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else if (marks >= 0) {
    console.log("Grade F");
} else {
    console.log("Invalid percentage");
}


// Q5: Check whether a year is a leap year

let year = Number(prompt("Q5 - Enter a year: "));

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


// Q6: Print the day of the week using switch-case

let day = Number(prompt("Q6 - Enter a day number (1-7): "));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}


// Q7: Simple calculator using switch-case

let first = Number(prompt("Q7(a) - Enter first number: "));
let second = Number(prompt("Q7(b) - Enter second number: "));
let operator = prompt("Enter +, -, * or /: ");

switch (operator) {
    case "+":
        console.log(first + second);
        break;
    case "-":
        console.log(first - second);
        break;
    case "*":
        console.log(first * second);
        break;
    case "/":
        if (second === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(first / second);
        }
        break;
    default:
        console.log("Invalid operator");
}


// Q8: Check whether a character is a vowel or consonant

let letter = prompt("Q8 - Enter a letter: ").toLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}


// Q9: Traffic light system using switch-case

let color = prompt("Q9 - Enter traffic light color: ").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}


// Q10: Menu-driven program using switch-case
console.log("Q10 - Menu-driven program");
let balance = 1000;
let choice;

do {
    choice = prompt(
        "1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\nChoose an option:"
    );

    switch (choice) {
        case "1":
            console.log("Balance: " + balance);
            break;

        case "2":
            let deposit = Number(prompt("Enter deposit amount:"));
            balance = balance + deposit;
            console.log("New balance: " + balance);
            break;

        case "3":
            let withdraw = Number(prompt("Enter withdrawal amount:"));

            if (withdraw <= balance && withdraw > 0) {
                balance = balance - withdraw;
                console.log("New balance: " + balance);
            } else {
                console.log("Invalid amount or insufficient balance");
            }
            break;

        case "4":
            console.log("Exiting");
            break;

        default:
            console.log("Invalid option");
    }
} while (choice !== "4");