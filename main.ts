type User = {
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean
}

let myUser : User = {
    _id : "123",
    name : "snehil",
    email : "h@gmail.com",
    isActive : false
}
myUser.name ="ravi"
console.log("myUser ",myUser)

export {}