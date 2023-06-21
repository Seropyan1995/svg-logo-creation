// Import Inquirer module
const inquirer = require("inquirer");
// Imports File system module
const fs = require("fs");
// Imports classes from shapes.js file
const Shape = require("./lib/shapes");
// Array that holds the questions to be prompted to the user
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to 3 characters for your logo.",
        validate: textInput => {
            if ((textInput) && (textInput.length <= 3)) {
                return true;
            } else {
                console.log("Please enter up to 3 characters for your logo.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a text color keyword or hexadecimal number",
        validate: textColorInput => {
            if (textColorInput) {
                return true;
            } else {
                console.log("Please enter a text color keyword or hexadecimal number");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape from the following list.",
        choices: ["circle", "triangle", "square"],
        validate: shapeInput => {
            if (shapeInput) {
                return true;
            } else {
                console.log("Please select a shape from the following list.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a shape color keyword or hexadecimal number",
        validate: shapeColorInput => {
            if (shapeColorInput) {
                return true;
            } else {
                console.log("Please enter a shape color keyword or hexadecimal number");
                return false;
            }
        }
    }
];

// Function that writes an SVG file using user input from inquirer prompts
function writeToFile(data) {

    fs.writeFile("logo.svg", data, function (err) {
      err ? console.log(err) : console.log('Successfully generated logo.svg!')
    });
};

// Function that creates a shape based on a user's input
function createShape(data) {
    if (data.shape === "square") {
        return new Shape.Square(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === "circle") {
        return new Shape.Circle(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === "triangle") {
        return new Shape.Triangle(data.text, data.textColor, data.shapeColor);
    }
};

// Function that initializes the app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const shape = createShape(data);
        const logo = shape.createLogo();
        writeToFile(logo);
    });
};

// A call to the initialize app function
init();
