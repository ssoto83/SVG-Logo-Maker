const shape = require('./shape');

class Square extends shape {
    render() {
        return `<rect x="50" y="50" width="150" height="150" fill="${this.color}" />`;
    }
}

module.exports= Square;