const fs = require('fs');
// Import the shape class to be tested
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

// Group test for the logo
describe('logo generator', () => {
    const filePath = 'logo.svg';

    beforeEach(() => {
        // check to see if file exists
        if(fs.existsSync(filePath)) {
            // If it exists delete for a clear slate during test
            fs.unlinkSync(filePath);
        }
    });

    afterEach(() => {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    })
// Test for the Triangle class
    test('should generate a triangle logo', () => {
        const shape = new Triangle();
        shape.setColor('green');
        fs.writeFileSync(filePath, shape.render());
        const data = fs.readFileSync(filePath, 'utf-8');
        expect(data).toBe('<polygon points="150,18 244,182 56,182" fill="green" />');
    });
// Test for the Circle class   
    test('should generate a circle logo', () => {
        const shape = new Circle();
        shape.setColor('red');
        fs.writeFileSync(filePath, shape.render());
        const data = fs.readFileSync(filePath, 'utf-8');
        expect(data).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });

// Test for the Square class  
    test('should generate a square logo', () => {
        const shape = new Square();
        shape.setColor('blue');
        fs.writeFileSync(filePath, shape.render());
        const data = fs.readFileSync(filePath, 'utf-8');
        expect(data).toBe('<rect x="50" y="50" width="150" height="150" fill="blue" />');
    });
});