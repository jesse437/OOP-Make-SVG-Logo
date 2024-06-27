// make a test function

const { Circle, Triangle, Square } = require("./Shapes");
// Make describe function for circle, triangle and square.

describe("Shapes", () => {
  describe("Circle", () => {
    it("return a circle logo", () => {
      const circle = new Circle("blue", "white", "JES");
      expect(circle.render()).toEqual(`
             <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">JES</text>
        </svg>
            `);
    });
  });
  describe("Square", () => {
    const square = new Square("blue", "white", "JES");
    expect(square.render()).toEqual(`
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">JES</text>
        </svg>
        `);
  });
  describe("Triangle", () => {
    const triangle = new Triangle("blue", "white", "JES");
    expect(triangle.render()).toEqual(` 
            <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">JES</text>
        </svg>
        `)
  });
});
