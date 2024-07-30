// Importing the Circle class
const circle = require('./circle');
const shape = require('./circle');

// Test case to verify that the Circle class renders the color correctly
test('Circle should render correctly with the color red', () => {
    const shape = new circle();
    // Set the color to red
    shape.setColor('red');
    // Verify that the render SVG output matches the expected SVG string
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});