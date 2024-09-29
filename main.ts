function isCheck(obj: { amount: number; isPaid: boolean }) : { amount: number; isPaid: boolean } {
    console.log("obj ",obj)
    return {amount : 1000, isPaid : false}
}
let data = isCheck({amount : 1000, isPaid : false})
console.log(data)
export {}