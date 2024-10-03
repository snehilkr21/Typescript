const Score : Array<number> = []
const Names : Array<string> = []

function identityOne(val :boolean|number) :boolean | number {
    return val
}

function identityTwo(val : any) : any{
    return val;
}

function identityThree<Type>(val : Type) : Type {
    return val
}

function identityFour<T>(val : T) : T{
    return val;
}

function identityFive<T>(val: T) : T{
    return val
}
interface Bootle {
    brand : string
}

identityFive<Bootle>({brand : "Apple"})

identityThree<string>("Snehil")
identityThree<number>(2)
export {}