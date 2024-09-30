"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    // Type narrowing to handle both cases
    if (typeof id === "string") {
        console.log(id.toLowerCase()); // Now TypeScript knows 'id' is a string
    }
    else {
        console.log(id); // 'id' is a number here
    }
}
printId(123); // Outputs: 123
printId("ABC"); // Outputs: abc (after converting to lowercase)
