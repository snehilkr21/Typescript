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
        if (cuponName === void 0) { cuponName = "snehil"; }
        console.log("cuponName ", cuponName);
        return true;
    }
};
console.log(newUser.cupon(""));
console.log(newUser);
