const fs = require('fs')
const inquirer = require('inquirer')


inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'Please Provide The Title of your Project. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter your projects name!');
                    return false;
                }
            }
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
            message: 'List your collaborators, if any, with links to their GitHub profiles? (Optional)',
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
            message: 'List your tests here (Optional)',
        },
        {
            type: 'input',
            name: 'github',
            message: 'In the case users have questions you can input your github here',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'In the case users have questions you can input your email here (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter your licence!');
                    return false;
                }
            }
        }
    ]
)

.then(({ title, description, installation, usage, credits, license, tests, github, email }) => {

  const template = 
  `
  # Project Title: ${title}
  [![License: ${license}]

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

  ## License
  This application is covered under the ${license} License

  ## Test
  ${tests}

  ## Questions? 
  Contact: 
  ${github}
  ${email}
`

  createNewFile(title,template);
});

function createNewFile(file, data) {

    fs.writeFile('./README.md', data, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Your Readme Has Been Generated')
})
}