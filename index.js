// These are all require functions to have access to all my files in my paths inside my website path
const inquirer = require("inquirer");

const fs = require("fs");
const notEmpty = require("./lib/ValidateEmpty");
const setShape = require("./lib/generateSVG");

console.log("Welcome to my LOGO maker!!!");

// Ive added a const questions that hold all my objects
// These objects have the questions that the website will be asking to the user
const questions = [
  {
    type: "maxlength-input",
    name: "text",
    message: "Enter your Brand Initials",
    maxLength: 3,
    validate: notEmpty,
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Select a color for the Text (Enter a color keyword OR hexadecimal number)",
    validate: notEmpty,
  },
  {
    type: "list",
    name: "Shapes",
    message: "please select a shape for your logo",
    choices: ["circle", "triangle", "square"],
    validate: notEmpty,
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color of the shape:",
    validate: notEmpty,
  },
];

function writeTofile(response) {
  const filename = `./images/logo.svg`;
  const svg = setShape(response);

  fs.writeFile(filename, svg, (err) =>
    err
      ? console.log(err)
      : console.log("perfect, your logo has been generated")
  );
}

// This function renders the prompt function that ask all the questions
// As well as for the user to answer all the questions as well.
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeTofile(answers);
  });
}

init();
