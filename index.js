const fs = require('fs')
const inquirer = require('inquirer')


inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'Please Provide The Title of your Project. (Required)',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please Provide A Description of your Project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Provide your projects Description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please Provide Installation Steps. (Optional)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the usage of your application? (Optional)',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide license information (Required)',
            choices: ['MIT', 'GPL', 'AGPL'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true
                } else {
                    console.log('Please enter your licence!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List your tests here',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Incase users have questions you can input your email here',
        }
    ]
)

.then(({
    title,
    description,
    installation,
    usage,
    credits,
    license,
    tests,
    questions
}) => {
  const template = 
  `
  # Project Title ${title}
  [![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ### Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usesage)
  * [Credits](#credits)
  * [License](#licence)

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Useage
  ${usage}

  ## Credits
  ${credits}

  ## Test
  ${tests}

  ## Questions? 
  Contact: ${questions}
`
  
  createNewFile(title,template);
});

function createNewFile(file, data) {

    fs.writeFile('./README.md', data, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Your Readme Is Complete')
})
}