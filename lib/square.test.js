const square = require('./Square');
const shape = require('./Square');


test('Square should render correctly with the color green', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="green" />');
});