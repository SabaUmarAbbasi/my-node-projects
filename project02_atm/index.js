//                         ATM                    //
import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;
const message = "Welcome to ATM";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code: "
});
if (pin_ans.ans === 1234) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposite", "Withdraw", "Fast Cash", "Balance Check"]
        });
        //------------------------------Deposite------------------------------------//
        if (ans.list === "Deposite") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposite_amount",
                message: "Please Enter your amount: "
            });
            if (ans.Deposite_amount > 0) {
                myBalance = myBalance + ans.Deposite_amount;
                console.log(myBalance);
            }
        }
        //-------------------------------Withdraw----------------------------------// 
        else if (ans.list === "Withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "Please entry amount"
            });
            if (ans.Withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.Withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not Enough Money");
            }
        }
        //------------------------------Fast Cash--------------------------------------//
        else if (ans.list === "Fast Cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "Fast_Cash",
                message: "Please Select One",
                choices: ["500", "1000", "2000", "3000", "5000"]
            });
            if (ans.Fast_Cash <= myBalance) {
                if (ans.Fast_Cash === "500") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "1000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "2000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "3000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_Cash === "5000") {
                    myBalance -= ans.Fast_Cash;
                    console.log(myBalance);
                }
            }
        }
        //----------------------------Balance Check----------------------------------------//
        else if (ans.list === "Balance Check") {
            console.log(`Your Balance is: ${myBalance}`);
        }
        //------------------------while Condition--------------------------------------------------//
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue:"
        });
        if (while_ans.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid pin code");
}
