"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check = function (obj) {
    console.log("obj ", obj);
    return { name: "snehil", amount: 1000 };
};
var data = check({ name: "snehil", isPaid: false });
console.log("data ", data);
