
const fs = require("fs");

// Get input from the terminal
function prompt(message) {
    process.stdout.write(message);

    const input = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, input, 0, input.length, null);

    return input.toString("utf8", 0, bytesRead).trim();
}
//------------------------------------------------------------------------------//

// 1. Print numbers 1 to 10: Write a program using a for loop to print numbers from 1 to 10.
{
    console.log("Print number from 1 - 10")
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}


// 2. Sum of first N numbers: Use a while loop to calculate the sum of the first N natural numbers.
{
    console.log("To calculate the sum of the first N natural numbers.")
    let n = Number(prompt("Q2 - Enter a positive number: "));
    let i = 1;
    let sum = 0;

    while (i <= n) {
        sum = sum + i;
        i++;
    }

    console.log("Sum: " + sum);
}


// 3. Multiplication table: Print the multiplication table of a given number using a for loop.
{
    console.log("Enter a Number to Get it's table")
    let number = Number(prompt("Q3 - Enter a number: "));

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}


// 4. Factorial calculation: Write a program using a while loop to find the factorial of a given number.
{
    console.log("Find Fractional Number of the given number")
    let num = Number(prompt("Q4 - Enter a non-negative whole number: "));
    let factorial = 1;
    let i = 1;

    while (i <= num) {
        factorial = factorial * i;
        i++;
    }

    console.log("Factorial: " + factorial);
}


// 5. Reverse counting: Print numbers from 10 down to 1 using a for loop.
{
    console.log("Reverse Count from 10 - 1")
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}


// 6. Even numbers up to N: Use a do-while loop to print all even numbers up to N.
{
    let limit = Number(prompt("Q6 - Enter a number: "));
    let i = 2;

    if (limit >= 2) {
        do {
            console.log(i);
            i = i + 2;
        } while (i <= limit);
    }
}


// 7. Sum of digits: Write a program using a while loop to calculate the sum of digits of a given number.
{
    let num = Number(prompt("Q7 - Enter a positive whole number: "));
    let sum = 0;

    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    console.log("Sum of digits: " + sum);
}


// 8. Fibonacci series: Generate the first 10 terms of the Fibonacci series using a for loop.
{
    let a = 0;
    let b = 1;

    for (let i = 1; i <= 10; i++) {
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
}


// 9. Guessing game: Use a do-while loop to keep asking the user for a number until they guess the correct one.
{
    let secret = 7;
    let guess;

    do {
        guess = Number(prompt("Q9 - Guess the number (1-10): "));

        if (guess !== secret) {
            console.log("Wrong guess! Try again.");
        }
    } while (guess !== secret);

    console.log("Correct! You guessed the number.");
}


// 10. Prime number check: Write a program using a for loop to check if a given number is prime.

{
    let num = Number(prompt("Q10 - Enter a whole number to check if it is a prime number: "));
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log("Prime number");
    } else {
        console.log("Not a prime number");
    }
}
