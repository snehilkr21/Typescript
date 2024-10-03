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

//Example 1
function ProductList<Type>(products: Type[]): Type {
    return products[3]; 
}
console.log(ProductList([1, 2, 3, 4, 5])); 

//Example 2
function ProductList2<T>(products : T[]) :T[]{
    return products
}
console.log(ProductList2([1 ,2,3]))

//Example 3
const ProductList3 = <Type> (product : Type[]) : Type => {
     return product[0]
} 
console.log(ProductList3([1,2,3]))

export {}