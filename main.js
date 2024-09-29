"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCheck(obj) {
    console.log("obj ", obj);
    return { amount: 1000, isPaid: false };
}
var data = isCheck({ amount: 1000, isPaid: false });
console.log(data);
