"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "123",
    name: "snehil",
    email: "h@gmail.com",
    isActive: false,
    arrData: [1, 2, 3]
};
myUser.name = "ravi";
myUser.arrData.push(10); // Error: Property 'push' does not exist on type 'readonly number[]'
console.log("myUser", myUser);
