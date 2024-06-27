const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require("fs");
const notEmpy = require('./lib/ValidateNotEmpty');
const setShape = require("./lib/generateSVG");

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


console.log("Welcome to my LOGO maker!!!");

const questions = [
{
    type: 'maxlength-input',
    name: 'text',
    message: 'Enter your Brand Initials',
    maxLength: 3,
    validate: notEmpy,
}, 
{
type: 'input',
name: 'textColor',
message: 'Select a color for the Text (Enter a color keyword OR hexadecimal number)',
validate: notEmpy,

},
{
    type: 'list',
    name: 'Shapes',
    message: 'please select a shape for your logo',
    choices: ['circle', 'triangle', 'square'],
    validate: notEmpy,

},
{
  type: 'input',
  name: 'shapeColor',
  message: 'Enter the color of the shape:',
  validate: notEmpy,

}
]

function writeTofile(response) {
  const filename = `./examples/logo.svg`
  const svg = setShape(response);

  fs.writeFile(filename, svg, (err) => err ? console.log(err) : console.log("perfect, your logo has been generated"))
  
}

function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    writeTofile(answers)
  });
}

init ();