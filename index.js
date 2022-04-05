const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
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

async function buildTeam() {
    await buildManager()
    await nextEmployee()
}

buildTeam();
