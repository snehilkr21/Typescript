"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.greet = function () {
        console.log("Hello, ".concat(this.name));
    };
    return User;
}());
var user = new User("Snehil");
console.log(user.name);
user.greet();
