// Importing the Square class
const Square = require('./Square');

// Test case to verify that the Square class renders the color correctly
test('Square should render correctly with the color green', () => {
    const shape = new Square();
    // Set the color to green
    shape.setColor('green');
    // Verify that the render SVG output matches the expected SVG string
    expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="green" />');
});