"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createuser(user) {
    return { email: "", name: "", isActive: true };
}
var data = createuser({ email: "", name: "", isActive: false });
console.log("data", data);
