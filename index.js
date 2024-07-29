const fs = require('fs');
const inquirer = require('inquirer');

// To Validate color
function validateC(color) {
    const hexColorPattern = /^#[0-9A-Fa-f]{6}$/;
    const colorKeywords = new Set(['red', 'green', 'blue', 'yellow', 'black', 'white', 'gray']);
    return hexColorPattern.test(color) || colorKeywords.has(color);
}

// To Validate shape
function validateS(shape) {
    return['circle', 'triangle', 'square'].includes(shape);
}

// To create the SVG file
function createSVG(text, textColor, shape, shapeColor) {
    let shapeElement;

    if (shape === 'circle') {
        shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        shapeElement = `<polygon points ="100, 200 200,200 150,100" fill="${shapeColor}"/>`;
    } else if (shape === 'square') {
        shapeElement = `<rect x="125" y="125" width="50" fill="${shapeColor}" />`;
    } else {
        shapeElement = '';
    }

    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="100" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    ${shapeElement}
</svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    }

// Prompt function
async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your logo (up to 3 charaters):',
            validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
            validate: input => validateC(input) ? true: 'Invalid color. Use a valid Keyword or hexadecimal color code.'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
            validate: input => validateC(input) ? true: 'Invalid color. Use a valid Keyword or hexadecimal color code.'
        }
    ]);

    createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    console.log('Generated logo.svg');
}

// Start the prompt
promptUser();