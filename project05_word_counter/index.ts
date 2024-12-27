//   #! /usr/bin/env node

//------------------------------Word Counter-----------------------//

import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter your sentence"
})


let word_count = user_ans.words.trim().split(" ")

console.log(`Your sentence has ${word_count.length} words.`);


