const inquirer = require('inquirer')

// prompt questions for user input
const promptUser = () => {
    return inquirer.prompt([
        // Title
        {  
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        
        //Description
        {  
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        
        //Installation
        {  
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation guide!');
                    return false;
                }
            }
        },

        //Usage
        {  
            type: 'input',
            name: 'Usage',
            message: 'How is the app used?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide an example of how to use the app!');
                    return false;
                }
            }
        },

        //Confirm if license used
        {  
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Will you be using a license for your app?',
            default: true
        },
        // If license used then prompt list of license
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license used:',
            choices: ['Mozilla Public License 2.0", "GNU GPL License", "MIT License", "Apache License 2.0'],
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                }else {
                    return false;
                }
            }
        },

        //Contribution
        {        
            type: 'input', 
            name: 'contribution', 
            message: "Enter your app's contribution guide:"   
               
        }, 

        // Tests if used
        {
            type: 'input', 
            name: 'test', 
            message: 'Enter your test instructions.'   
        },


        //User github
        {        
            type: 'input', 
            name: 'github', 
            message: 'Enter your Github name:'        
        }, 

        //User email
        {        
            type: "input", 
            name: 'email', 
            message: "Enter your email address:"   
               
        }, 

    ])
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
