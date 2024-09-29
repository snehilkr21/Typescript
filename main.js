"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCheck(_a) {
    var amount = _a.amount, isPaid = _a.isPaid;
    return { amount: 1000, isPaid: false };
}
var data = isCheck({ amount: 1000, isPaid: false });
console.log(data);
