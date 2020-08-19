const inquirer = require('inquirer')
const fs = require('fs')


// array of questions for user


CreateIndex();

async function CreateIndex() {
    let title;
    let project;
    let install;
    let guideline;
    let contribution;
    let test;
    let liscense;

    const variables =[{title},{project},{install},{guideline},{contribution},{test}]

    const liscenses = ["MIT"]

    const names =["title","project","install","guideline","contribution","test", "liscense"]

    const questions = ["What is the project title?","Describe your project","What are your installation instructions?","What are the guidelines for use?","What are the guidelines for contributions?","What are the test instructions?", "What liscense will you be using?" ]
for(let i =0;i<questions.length-1; i++ ){
    try {
          variables[i] = await inquirer.prompt({
          message: questions[i],
          name: names[i],
        });
        console.log(variables[i])
      } catch (err) {
        console.log(err);
      }
   
    }
    


var read = ``

    await fs.writeFile("README.md",read, err =>{



    });
}
