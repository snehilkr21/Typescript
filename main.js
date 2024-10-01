"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name; // Initialize the name in the constructor
    }
    Animal.prototype.getName = function () { return this.name; }; // Allows subclasses to access the private property
    Animal.prototype.move = function () {
        console.log("".concat(this.getName(), " is moving...")); // Use the getter to access the name
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; // Call the constructor of the abstract class
    }
    Dog.prototype.makeSound = function () { console.log("Woof!"); };
    Dog.prototype.printName = function () {
        console.log("Dog's name is: ".concat(this.getName())); // Calling getName() directly
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this; // Call the constructor of the abstract class
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow!");
    };
    Cat.prototype.printName = function () {
        console.log("Cat's name is: ".concat(this.getName())); // Calling getName() directly
    };
    return Cat;
}(Animal));
var dog = new Dog("Buddy");
var cat = new Cat("Whiskers");
dog.makeSound(); // Output: Woof!
dog.move(); // Output: Buddy is moving...
dog.printName(); // Output: Dog's name is: Buddy
cat.makeSound(); // Output: Meow!
cat.move(); // Output: Whiskers is moving...
cat.printName(); // Output: Cat's name is: Whiskers
