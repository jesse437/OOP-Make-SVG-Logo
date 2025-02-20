// These are classes for all my shapes 
class Shapes {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

// Circle class 
class Circle extends Shapes { 
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    };
    render() {
        return`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

// Square class 
class Square extends Shapes { 
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    render() {
        return`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

// Triangle class 
class Triangle extends Shapes {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

// This line of code is a modules to export the three shapes inside my curly braces
module.exports = {Circle, Square, Triangle};