type HasName = {
    name: string;
};

type GreetFunction = {
    greet: () => string;
};

// Intersection type: must have both 'name' property and 'greet' method
type NamedGreeter = HasName & GreetFunction;

let greeter: NamedGreeter = {
    name: "Snehil",
    greet: () => "Hello!"
};

console.log(greeter.name);
console.log(greeter.greet());

export {}