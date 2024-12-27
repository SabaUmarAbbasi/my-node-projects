// Simple Command Line Calculator
import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter You First Number:"
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter You Second Number:"
    },
    {
        type: "list",
        name: "operator",
        message: "Please select operation:",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.first_number - ans.second_number);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else {
    console.log(ans.first_number / ans.second_number);
}
