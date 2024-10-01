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
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name; // Initialize name in the constructor
        this.email = email; // Initialize email in the constructor
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and my email is ").concat(this.email));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, email, position) {
        var _this = _super.call(this, name, email) || this; // Calling the parent constructor with both name and email
        _this.position = position;
        return _this;
    }
    Employee.prototype.introduce = function () {
        console.log("I am ".concat(this.name, ", and I work as a ").concat(this.position, "."));
        this.greet(); // Calling the inherited public method
    };
    Employee.prototype.showEmail = function () {
        console.log("My email is ".concat(this.email)); // Accessing protected email property
    };
    return Employee;
}(Person));
var emp = new Employee("John", "john@example.com", "Developer");
emp.introduce(); // Works, can access public members directly
// Directly accessing public properties
console.log(emp.name); // Output: John
// Error: Property 'email' is protected and only accessible within class 'Person' and its subclasses
// console.log(emp.email); // Uncommenting this line will cause an error
// Using a method in the subclass to access the protected email
emp.showEmail(); // Output: My email is john@example.com
// Directly calling the public method
emp.greet(); // Output: Hello, my name is John and my email is john@example.com
