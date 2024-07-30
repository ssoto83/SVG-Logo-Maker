const fs = require('fs');
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

describe('logo generator', () => {
    const filePath = 'logo.svg';

    beforeEach(() => {
        if(fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    });

    afterEach(() => {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    })

    test('should generate a triangle logo', () => {
        const shape = new Triangle();
        shape.setColor('green');
        fs.writeFileSync(filePath, shape.render());
        const data = fs.readFileSync(filePath, 'utf-8');
        expect(data).toBe('<polygon points="150,18 244,182 56,182" fill="green" />');
    });
    
    test('should generate a circle logo', () => {
        const shape = new Circle();
        shape.setColor('red');
        fs.writeFileSync(filePath, shape.render());
        const data = fs.readFileSync(filePath, 'utf-8');
        expect(data).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    
    test('should generate a square logo', () => {
        const shape = new Square();
        shape.setColor('blue');
        fs.writeFileSync(filePath, shape.render());
        const data = fs.readFileSync(filePath, 'utf-8');
        expect(data).toBe('<rect x="50" y="50" width="150" height="150" fill="blue" />');
    });
});