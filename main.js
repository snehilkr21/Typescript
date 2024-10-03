"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score = [];
var Names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
identityFive({ brand: "Apple" });
identityThree("Snehil");
identityThree(2);
//Example 1
function ProductList(products) {
    return products[3];
}
console.log(ProductList([1, 2, 3, 4, 5]));
//Example 2
function ProductList2(products) {
    return products;
}
console.log(ProductList2([1, 2, 3]));
//Example 3
var ProductList3 = function (product) {
    return product[0];
};
console.log(ProductList3([1, 2, 3]));
