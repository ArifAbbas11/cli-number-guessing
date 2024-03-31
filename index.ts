#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a ranom number-done
// user input for guessing number-done
// compare user input with computer generat number and show result-done
const randomNUmber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNUmber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "pleas guess a number between 1-6: ",

    }
]);

console.log(answer);
if(answer.userGuessedNumber === randomNUmber)
{
    console.log("Congratulations! you guessed right number.");
}
else
{
    console.log("you guessed wrong number");
}