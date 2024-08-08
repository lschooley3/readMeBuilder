// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// // TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description for your README",
      name: "description",
    },
    {
      type: "input",
      message: "Write your installation instructions",
      name: "install",
    },
    {
      type: "input",
      message: "Write your usage information",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Contribution Guidelines, are you open to others contributing? Explain.",
      name: "guidelines",
    },
    {
      type: "input",
      message: "Write your test instructions",
      name: "test",
    },
    {
      type: "input",
      message: "Github username",
      name: "username",
    },
    {
      type: "input",
      message: "Contact email",
      name: "email",
    },
    {
      type: "list",
      message: "Choose your license",
      name: "license",
      choices: ["MIT", "GNU", "Apache", "BSD", "Creative Commons", "Mozilla"],
    },
  ])
  .then((response) =>
    fs.writeFile(`README.md`, generateMarkdown(response), function (err) {
      if (err) throw err;
      console.log("Saved!");
    })
  );
}

// // Function call to initialize app
init();
