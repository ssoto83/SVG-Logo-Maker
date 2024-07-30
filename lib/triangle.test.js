const Triangle = require('./Triangle');
const shape = require('./Triangle');

// describe('Triangle', () => {
//     test('Triangle should render correctly with the color blue', () => {
//         const shape = new Triangle();
//         shape.setColor("blue");
//         const expectedOutput = '<polygon points="150",18 244,182 56,182" fill="blue" />';
//         const actualOutput = shape.render();

//         expect(actualOutput).toEqual(expectedOutput);
//     });
// });

test('Triangle should render correctly with the color blue', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150",18 244,182 56,182" fill="blue" />');
});