const inquirer = require('inquirer')
const fs = require('fs')



// array of questions for user



async function CreateIndex() {

let Title;
let Project;
let Install;
let Guideline;
let Contribution;
let Test;
let Git;
let Email;
let License;
let Badge; 
let Badged;


  const MIT = {
    name:"MIT",
    description:"'A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.' - exerpt from 'https://tldrlegal.com/license/mit-license'",
    badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
  }

  const Apache = {
    name:"Apache",
    description: "'A permissive, BSD-3 Clause style license with restrictions on trademark use and the requirement of including 'this product includes software developed by the Apache Group for use in the Apache HTTP server project (http://www.apache.org/).' - exerpt from 'https://tldrlegal.com/license/apache-license-1.0-(apache-1.0)'",

    badge:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  const BSD2 ={
    description: "'The BSD 2-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright notice in it (found in Fulltext). Many other licenses are influenced by this one.'- exerpt from 'https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)'",
    badge: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }

  const BSD3 ={
    name:"BSD3",

    description:"'The BSD 3-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright and license notice in it (found in Fulltext).' -exerpt from 'https://tldrlegal.com/license/bsd-3-clause-license-(revised)' ",

    badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }

  const GPL = {
    name:"GPL",
    description:"'You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.' - exerpt from 'https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)'",

    badge:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) "
  }
  const LGPL ={
    name:"LGPL",
    description:"'This license is mainly applied to libraries. You may copy, distribute and modify the software provided that modifications are described and licensed for free under LGPL. Derivatives works (including modifications or anything statically linked to the library) can only be redistributed under LGPL, but applications that use the library don't have to be.' - exerpt from 'https://tldrlegal.com/license/gnu-lesser-general-public-license-v3-(lgpl-3)'",

    badge:"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  const MPL2 ={
    name: "MPL2",
    description:"'MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL.' - 'excerpt is from https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)'",
    badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }

  const CC0 ={
    name:"CC0",

    description:"'Releases software into the public domain, or otherwise grants permission to use it for any purpose. Disclaims patent licenses.'-exerpt from 'https://tldrlegal.com/license/creative-commons-cc0-1.0-universal' ",

    badge:"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }

    const badges =[MIT,Apache,BSD2,BSD3,GPL,LGPL,MPL2,CC0]

    const licenses = ["MIT", "Apache","BSD2", "BSD3","GPL", "LGPL", "MPL2", "CC0"]

    const names =["title","project","install","guideline","contribution","test", "git","email","license"]

    const questions = ["What is the project title?","Describe your project","What are your installation instructions?","What are the guidelines for use?","What are the guidelines for contributions?","What are the test instructions?","What is your github username","What is your email address?", "What liscense will you be using?" ]

    try {
          const{ title } = await inquirer.prompt({
          message: questions[0],
          name: names[0],
        });
        Title = title
        console.log(Title)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ project } = await inquirer.prompt({
          message: questions[1],
          name: names[1],
        });
        Project = project;
        console.log(Project)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ install } = await inquirer.prompt({
          message: questions[2],
          name: names[2],
        });
        Install = install
        console.log(Install)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ guideline } = await inquirer.prompt({
          message: questions[3],
          name: names[3],
        });
        Guideline = guideline
        console.log(Guideline)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ contribution } = await inquirer.prompt({
          message: questions[4],
          name: names[4],
        });
        Contribution = contribution;
        console.log(Contribution)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ test } = await inquirer.prompt({
          message: questions[5],
          name: names[5],
        });
        Test = test;
        console.log(Test)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ git } = await inquirer.prompt({
          message: questions[6],
          name: names[6],
        });
        Git= "https://www.github.com/"+ git
        console.log(Git)
      } catch (err) {
        console.log(err);
      }
    try {
          const{ email } = await inquirer.prompt({
          message: questions[7],
          name: names[7],
        });
        Email = email
        console.log(Email)
      } catch (err) {
        console.log(err);
      }

      try {
        const{ license } = await inquirer.prompt({
        type: 'list',
        message: questions[8],
        choices: licenses ,
        name: names[8]
      });
      License = license
      console.log(License)
for(var i = 0; i< badges.length; i++){
      if(License == badges[i].name){
        Badge = badges[i].badge;
        Badged = badges[i].description;

      }      
    }
    } catch (err) {
      console.log(err);
    }
    
    

var read = `# ${Title}

## Description
<br>
${Project}


### Licenses
${Badge}
<br>
${Badged}

## Table of Contents
<br>
* <a href="#install">Installation</a>
<br>
* <a href ="#use">Usage Information</a>
<br>
* <a href="#test">Test Instructions</a>
<br>
* <a href="#q">Questions</a>

<h3 id= "install" > Installation</h3>
<br>
${Install}


<h3 id = "use"> Usage Information</h3>
<br>
*Guidelines for use:*
<br>
${Guideline}
<br>
*Guidelines for Contribution:* 
<br>
${Contribution}

<h3 id="test"> Test Instructions</h3>
${Test}


<h2 id = "q"> Questions</h2>

If you have Questions you can check out:
<br>
<a href="${Git}">${Git}</a><br>
or email:
${Email}`



    await fs.writeFile("README.md",read, err =>{
      if(err){
        throw err
      }
console.log("Your page has been made")

    });
}

CreateIndex();

