const inquirer = require('inquirer')
const fs = require('fs')


// array of questions for user



async function CreateIndex() {
    var title;
    var project;
    var install;
    var guideline;
    var contribution;
    var test;
    const variables = [title,project,install,guideline,contribution,test]
    const names =["title","project","install","guideline","contribution","test"]

    const questions = ["What is the project title?","Describe your project","What are your installation instructions?","What are the guidelines for use?","What are the guidelines for contributions?","What are the test instructions?" ]
    
for(let i=0;i< questions.length; i++ ) {
    try {
          variables[i] = await inquirer.prompt({
          message: questions[i],
          name: names[i],
        });
        console.log(variables[i])
      } catch (err) {
        console.log(err);
      }

    
};


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
