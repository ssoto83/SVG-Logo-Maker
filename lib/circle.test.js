const circle = require('./circle');
const shape = require('./circle');

test('Circle should render correctly with the color red', () => {
    const shape = new circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});