
const fs = require("fs");

// Get input from the terminal
function prompt(message) {
    process.stdout.write(message);

    const input = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, input, 0, input.length, null);

    return input.toString("utf8", 0, bytesRead).trim();
}
//------------------------------------------------------------------------------//

// Q1: Print numbers from 1 to 10 using for loop
{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}


// Q2: Find the sum of the first N natural numbers using while loop
{
    let n = Number(prompt("Q2 - Enter a positive number: "));
    let i = 1;
    let sum = 0;

    while (i <= n) {
        sum = sum + i;
        i++;
    }

    console.log("Sum: " + sum);
}


// Q3: Print the multiplication table of a number using for loop
{
    let number = Number(prompt("Q3 - Enter a number: "));

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}


// Q4: Find the factorial of a number using while loop
{
    let num = Number(prompt("Q4 - Enter a non-negative whole number: "));
    let factorial = 1;
    let i = 1;

    while (i <= num) {
        factorial = factorial * i;
        i++;
    }

    console.log("Factorial: " + factorial);
}


// Q5: Print numbers from 10 to 1 using for loop
{
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}


// Q6: Print even numbers up to N using do-while loop
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


// Q7: Find the sum of digits using while loop
{
    let num = Number(prompt("Q7 - Enter a positive whole number: "));
    let sum = 0;

    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    console.log("Sum of digits: " + sum);
}


// Q8: Print the first 10 Fibonacci numbers using for loop
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


// Q9: Guess the correct number using do-while loop
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


// Q10: Check whether a number is prime using for loop
{
    let num = Number(prompt("Q10 - Enter a whole number: "));
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
