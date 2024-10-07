interface Database {
    username: string;
    password: string;
}

function anotherFunction<T, U extends keyof Database>(val1: T, val2: U, obj: Database): object {
    const propertyValue = obj[val2];  // val2 will be either 'username' or 'password'
    return {
        val1,
        key: val2,          // the key name (either 'username' or 'password')
        value: propertyValue // the value associated with the key
    };
}

const db: Database = { username: "snehil", password: "mypassword" };

console.log(anotherFunction(3, "username", db)); 

console.log(anotherFunction(5, "password", db)); 

 export {}