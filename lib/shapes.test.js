const {execSync} = require('child_process');
const fs = require('fs');

describe('logo generator', () = {
    beforeEach(() => {
        if(fs.existsSync('logo.svg')) {
            fs.unlinkSync('logo.svg');
        }
    });
    it('generate an SVG file', () => {
        execSync('node shapes.js', {
            input: 'ABC,\nblue\ncircle\n#ff5733\n',
            encoding: 'utf-8'
        });
        const svgContent = fs.readFileSync('logo.svg', 'utf-8');
        expect(svgContent).toContain('<text x="150" y="100" font-size="40" text-anchor="middle" fill="blue">ABC</text>');
        expect(svgContent).toContain('<circle cx="150" cy="150" r="50" fill="#ff5733" />';)
    });
});
