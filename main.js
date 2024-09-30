"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserInfo(user) {
    console.log("Name: ".concat(user.name));
    // Check if 'email' exists before using it
    if (user.email) {
        console.log("Email: ".concat(user.email));
    }
    else {
        console.log('Email not provided');
    }
}
printUserInfo({ name: "Snehil" }); // No email provided
printUserInfo({ name: "Ravi", email: "ravi@gmail.com" }); // Email provided
