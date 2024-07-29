const shape = require('./shape');

class Circle extends shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports= Circle;