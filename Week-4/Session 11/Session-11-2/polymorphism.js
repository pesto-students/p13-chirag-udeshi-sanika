//Polymorphism
console.log("Polymorphism : ");
class Shape {
  calculateArea = () => {
    return "Unknown shape";
  };
}

class Rectangle extends Shape {
  calculateArea = (width, height) => {
    if (isNaN(width) || isNaN(height)) return "Invalid input";
    return width * height;
  };
}

class Triangle extends Shape {
  calculateArea = (base, height) => {
    if (isNaN(base) || isNaN(height)) return "Invalid input";
    return (base * height) / 2;
  };
}

class Circle extends Shape {
  calculateArea = (radius) => {
    if (isNaN(radius)) return "Invalid input";
    return Math.PI * radius * radius;
  };
}

const rectangle = new Rectangle();
console.log(
  "Area of rectangle with width 5 and height 10 units is : " +
    rectangle.calculateArea(5, 10)
);

const triangle = new Triangle();
console.log(
  "Area of triangle with base 5 units and height 10 units is : " +
    triangle.calculateArea(5, 10)
);

const circle = new Circle();
console.log("Area of circle with radius 5 units is " + circle.calculateArea(5));
