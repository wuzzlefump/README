const inquirer = require('inquirer')
const fs = require('fs')


// array of questions for user



async function CreateIndex() {

    const liscenses = ["MIT"]

    const names =["title","project","install","guideline","contribution","test", "liscense"]

    const questions = ["What is the project title?","Describe your project","What are your installation instructions?","What are the guidelines for use?","What are the guidelines for contributions?","What are the test instructions?", "What liscense will you be using?" ]

    try {
          const{ title } = await inquirer.prompt({
          message: questions[0],
          name: names[0],
        });
        console.log(title)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ project } = await inquirer.prompt({
          message: questions[1],
          name: names[1],
        });
        console.log(project)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ install } = await inquirer.prompt({
          message: questions[2],
          name: names[2],
        });
        console.log(install)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ guideline } = await inquirer.prompt({
          message: questions[3],
          name: names[3],
        });
        console.log(guideline)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ contribution } = await inquirer.prompt({
          message: questions[4],
          name: names[4],
        });
        console.log(contribution)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ test } = await inquirer.prompt({
          message: questions[5],
          name: names[5],
        });
        console.log(test)
      } catch (err) {
        console.log(err);
      }
      try {
        const{ liscense } = await inquirer.prompt({
        type: 'list',
        message: questions[6],
        choices: liscenses ,
        name: names[6]
      });
      console.log(liscense)
    } catch (err) {
      console.log(err);
    }

    


var read = ``

    await fs.writeFile("README.md",read, err =>{



    });
}


// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
CreateIndex();
}

// function call to initialize program
init();