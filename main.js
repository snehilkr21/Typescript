"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_email) {
        this.email = _email;
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (_email) {
            if (_email) {
                this.email = _email;
            }
            else {
                console.log("Invalid email address");
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("a@gmail.com");
console.log(user.getEmail);
user.setEmail = "a@gmail.com";
console.log(user.getEmail);
