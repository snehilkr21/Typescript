"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    id: 33,
    email: "sn@gmail.com",
    userId: 55,
    startTrail: function () {
        return "snehil";
    },
    cupon: function (cuponName) {
        return true;
    }
};
console.log(newUser.cupon("snehil"));
console.log(newUser);
