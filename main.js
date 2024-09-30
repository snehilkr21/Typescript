"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = {
    name: "Snehil",
    isActive: true,
    // 'email' is not provided, and that's okay because it's optional
};
var user2 = {
    name: "Ravi",
    email: "ravi@gmail.com",
    isActive: false, // Both required and optional properties are provided
};
console.log(user1);
console.log(user2);
