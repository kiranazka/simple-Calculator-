import inquirer from "inquirer";
let answers = await inquirer.prompt([
   {message: "Enter First Number", type:"number", name:"firstNumber"},
   {message: "Enter Second Number", type:"number", name:"secondNumber"},
   {
   messag: "select one operator to perform operation",
   type: "list",
   name: "operator",
choices:["+","-","/","*"],

   }
]);
// console.log(answers);
// condition operator if else
if(answers.operator === "+"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "-"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "/"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else if(answers.operator === "*"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "**"){
    console.log(answers.firstNumber ** answers.secondNumber)
}

