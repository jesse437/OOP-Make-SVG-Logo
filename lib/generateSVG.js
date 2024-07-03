// destructuring assignment to import the three shapes
// Then using the require function to have access to Shapes 
const {Triangle, Circle, Square} = require('./Shapes')

// Ive also added a function with "if" statement for all shapes
// These "if" statements will render the user the options to select the chosen shape. text etc... 
function setShape(response) {
    if (response.Shapes === 'circle') {
        let UserShape = new Circle(response.shapeColor, response.textColor, response.text);
        return UserShape.render()
    }
    if (response.Shapes === 'triangle') {
        let UserShape = new Triangle(response.shapeColor, response.textColor, response.text);
        return UserShape.render()
    }
    if (response.Shapes === "square") {
    let UserShape = new Square (response.shapeColor, response.textColor, response.text);
    return UserShape.render()
    }
}
// Down here ive created a module export to export the setShape function
module.exports = setShape;