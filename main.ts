type User = {
    name: string;         // Required property
    email?: string;       // Optional property (may or may not be present)
    isActive: boolean;    // Required property
};

let user1: User = {
    name: "Snehil",
    isActive: true,
    // 'email' is not provided, and that's okay because it's optional
};

let user2: User = {
    name: "Ravi",
    email: "ravi@gmail.com",
    isActive: false,  // Both required and optional properties are provided
};

console.log(user1);
console.log(user2);


export {}