const check = (obj : {name : string , isPaid : boolean}) : {name : string , amount : number} =>{
    console.log("obj ",obj)
    return {name : "snehil" , amount : 1000}

}
let data = check({name : "snehil", isPaid : false})
console.log("data ",data)

export {}