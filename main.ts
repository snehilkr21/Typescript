let id: string | number;

id = 123;      // OK: 'id' is a number
id = "ABC";    // OK: 'id' is a string
// id = true;  // Error: 'id' can only be a string or number
console.log(id)

export {}