const inquirer = require('inquirer');
const fs = require('fs');
const createTeamPage = require('./lib/generateTeamPage');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = []

async function buildManager() {
    const managerObject = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('A manager is required!')
            }

        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Manager's id number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an ID')
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's email?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an email!')
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an office number!')
            }
        }
    ])
    const {managerName, managerId, managerEmail, officeNumber} = managerObject;
    const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
    team.push(manager)

    nextEmployee();
}

async function nextEmployee() {
    const newEmployee = await inquirer.prompt ([
        {
            type: 'checkbox',
            name: 'employeeType',
            message: 'Would you like to add another team member?',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish Team'],
        }
    ])
    const {employeeType} = newEmployee

    if(employeeType[0] === 'Engineer') {
        buildEngineer()
    } else if (employeeType[0] === 'Intern') {
        buildIntern()
    } else if (employeeType[0] === 'Manager') {
        buildManager()
    } else {
        finishTeam()
    }
}

async function buildEngineer() {
    const engineerObject = await inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the Engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('An engineer is required!')
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the Engineer's id number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an ID')
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the Engineer's email?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an email!')
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the Engineer's github?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide a github!')
            }
        }
    ])
    const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerObject
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
    team.push(engineer);

    nextEmployee();
}

async function buildIntern() {
    const internObject = await inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the Intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('An intern is required!')
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the Intern's id number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an ID')
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Intern's email?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please provide an email!')
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the Intern's schooling?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Please include schooling information!')
            }
        }
    ])
    const {internName, internId, internEmail, internSchool} = internObject
    const intern = new Intern(internName, internId, internEmail, internSchool)
    
    team.push(intern);

    nextEmployee();
}

async function buildTeam() {
    await buildManager()
}

function finishTeam() {
    const createTeamHtml = createTeamPage(team);
    const fileName = 'buildMyTeam'

    writeFile(fileName, createTeamHtml);

}

function writeFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}.html`, data, (err) => {
        if(err){
            console.log(err);
        }
        console.log('Your team page has been built!');
    });
}

buildTeam();
