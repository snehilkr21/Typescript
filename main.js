"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(password) {
        this.password = password;
    }
    User.prototype.displayPassword = function () {
        console.log("Password: ".concat(this.password));
    };
    return User;
}());
var user = new User("secret123");
console.log(user.password); // Error: Cannot access private property
user.displayPassword(); // Error: Cannot access private method
