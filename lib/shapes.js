// shape constructor class for defining shape parameters with function to create shape
class Shape {
    constructor(text, textColor, shapeColor, shapeCode, xPosition, yPosition, fontSize) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeCode = shapeCode;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.fontSize = fontSize;
    }
    // function to generate a shape's svg text aka logo
    createLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shapeCode} fill="${this.shapeColor}" />
        <text x="${this.xPosition}" y="${this.yPosition}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};
// square class that inherits structure from Shape class and extends it through parameters of its shape
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'rect x="50" y="50" width="150" height="150"', 125, 140, 60);
    }
};



module.exports = {
    Square,

};
