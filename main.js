"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, password, email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
    // Corrected the 'print' method, now it's a regular method
    User.prototype.print = function () {
        console.log("User: ".concat(this.name, ", Email: ").concat(this.email, ", id : ").concat(this.id, ", Password : ").concat(this.password));
    };
    return User;
}());
var user = new User(123, "Snehil", "secret123", "snehil@example.com");
user.print();
