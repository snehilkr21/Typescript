type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    readonly arrData: readonly number[]; // Makes both the reference and contents immutable
};

let myUser: User = {
    _id: "123",
    name: "snehil",
    email: "h@gmail.com",
    isActive: false,
    arrData: [1, 2, 3]
};

myUser.name = "ravi";
myUser.arrData.push(10); // Error: Property 'push' does not exist on type 'readonly number[]'

console.log("myUser", myUser);

export {};
