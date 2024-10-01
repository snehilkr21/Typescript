interface User {
    readonly id : number,
    email : string,
    userId : number,
    startTrail : () => string
}
const newUser : User = {
    id : 33,
    email : "sn@gmail.com",
    userId : 55,
    startTrail : () => {
        return "snehil"
    }
}
console.log(newUser)
export {}