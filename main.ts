function isCheck({ amount, isPaid }: { amount: number; isPaid: boolean }) : { amount: number; isPaid: boolean } {
    return {amount : 1000, isPaid : false}
}
let data = isCheck({amount : 1000, isPaid : false})
console.log(data)
export {}