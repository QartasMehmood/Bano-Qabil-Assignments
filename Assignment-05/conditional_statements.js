
const fs = require("fs");

// Get input from the terminal
function prompt(message) {
    process.stdout.write(message);

    const input = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, input, 0, input.length, null);

    return input.toString("utf8", 0, bytesRead).trim();
}

//----------------------------------------------------------------------//

 // 1. Write a program that checks if a number is positive, negative, or zero.

let num = Number(prompt("Q1 - Enter a number to check if the number is positive, negative, or zero.: "));

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 2. Even or odd check Using an if-else statement, determine whether a given integer is even or odd.

let num2 = Number(prompt("Q2 - Enter a number to find Even or Odd: "));

if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 3. Largest of two numbers Write a program that takes two numbers and prints the larger one using conditional statements.

console.log ("Q3 - Enter two Numbers to find which one is larger")
let a = Number(prompt("Q3(a) - Enter first number: "));
let b = Number(prompt("Q3(b) - Enter second number: "));

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both are equal");
}


 // 4. Grade evaluation Using if-else-if, assign grades (A, B, C, D, F) based on a student’s percentage score.


let marks = Number(prompt("Q4 - Enter your percentage to find your grade. eg; 50, 80 : "));

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


// 5. Leap year check Write a program that checks if a given year is a leap year using conditional statements.

let year = Number(prompt("Q5 - Enter a year to check if it is a leap year: "));

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


// 6. Day of week switch Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, … 7 = Sunday).

let day = Number(prompt("Q6 - Enter a day number (1-7) to find the day: "));

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


// 7. Calculator switch Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.
console.log("Simple Calculator")
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


// 8. Vowel or consonant Write a program that checks whether a given character is a vowel or cons

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


// 9. Traffic light system Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).

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


// 10. Menu-driven program Write a program using switch-case where the user selects from a menu (e.g., 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).

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