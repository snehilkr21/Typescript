interface Database {
    username : string,
    password : string
}

function anotherFunction<T, U extends Database> (val1: T , val2 : U) : object {
    return {
        val1,
        val2
    }
}

console.log(anotherFunction(3,{ 
    username : "snehil",
    password : "snehil",
    security : "hi"
 }))

 export {}