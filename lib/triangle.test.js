// Importing the Triangle class
const Triangle = require('./Triangle');

// Test case to verify that the Triangle class renders the color correctly
test('Triangle should render correctly with the color blue', () => {
    const shape = new Triangle();
    // Set the color to blue
    shape.setColor('blue');
    // Verify that the render SVG output matches the expected SVG string
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});