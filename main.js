"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function anotherFunction(val1, val2, obj) {
    var propertyValue = obj[val2]; // val2 will be either 'username' or 'password'
    return {
        val1: val1,
        key: val2, // the key name (either 'username' or 'password')
        value: propertyValue // the value associated with the key
    };
}
var db = { username: "snehil", password: "mypassword" };
console.log(anotherFunction(3, "username", db));
console.log(anotherFunction(5, "password", db));
