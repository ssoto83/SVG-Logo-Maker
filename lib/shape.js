// Define a base class names 'shape'
class shape {
    // Constructor for the color property
    constructor() {
        this.color = '';
    }
    // Method to set the color for the shape
    setColor(color){
        this.color = color;
    }
}
// Export the 'shape" class to use on the other modules
module.exports = shape;