import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message:"your weight in Kg?",
    type:"number",
    name:"weightinKg" },
    {
        message:"height in Meters",
        type:"number",
        name:"heightinMeters",


    }
]);
let bmi=answer.weightinKg/(answer.heightinMeters * answer.heightinMeters);
console.log(`yor bmi is ${bmi}`);

