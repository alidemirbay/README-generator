
// imports
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title for your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please give description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What  dependencies must be installed to run this app?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "usage",
    },
    {
        type: "input",
        message: "Please add contributors",
        name: "contributing",
    },
    {
        type: "input",
        message: "What command do you use to test this App?",
        name: "test",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for the project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./readme/" + fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + fileName);
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("DemoREADME.md", generatorMarkdown(data));
        })
}

// function call to initialize program
init();
