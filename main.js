"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSound(animal) {
    if ("bark" in animal) {
        animal.bark(); // TypeScript knows this must be a Dog
    }
    else {
        animal.meow(); // TypeScript knows this must be a Cat
    }
}
var myDog = { breed: "Labrador", bark: function () { return console.log("Woof!"); } };
var myCat = { breed: "Persian", meow: function () { return console.log("Meow!"); } };
makeSound(myDog); // Output: Woof!
makeSound(myCat); // Output: Meow!
