abstract class Animal {
    protected name: string; // Protected property to hold the name

    constructor(name: string) {
        this.name = name; // Initialize the name in the constructor
    }

    abstract makeSound(): void; // Abstract method

    move(): void {
        console.log(`${this.name} is moving...`); // Using the name property
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the abstract class
    }

    makeSound(): void {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the abstract class
    }

    makeSound(): void {
        console.log("Meow!");
    }
}

// Creating instances of subclasses
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Output: Woof!
dog.move();      // Output: Buddy is moving...
cat.makeSound(); // Output: Meow!
cat.move();      // Output: Whiskers is moving...


export {}