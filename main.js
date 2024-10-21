"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    // Method to get the content
    Box.prototype.getContent = function () {
        return this.content;
    };
    // Method to update the content
    Box.prototype.setContent = function (value) {
        this.content = value;
    };
    return Box;
}());
// Creating instances of the generic class with different types
// Box containing a number
var numberBox = new Box(123);
console.log(numberBox.getContent()); // Output: 123
// Box containing a string
var stringBox = new Box("Hello, World!");
console.log(stringBox.getContent()); // Output: "Hello, World!"
// Box containing an object
var objectBox = new Box({ name: "Snehil" });
console.log(objectBox.getContent()); // Output: { name: "Snehil" }
// Changing the content of the stringBox
stringBox.setContent("Updated!");
console.log(stringBox.getContent()); // Output: "Updated!"
