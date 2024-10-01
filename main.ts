abstract class Animal {
    private name: string; // Private property
    constructor(name: string) {
        this.name = name; // Initialize the name in the constructor
    }
    protected getName(): string { return this.name; } // Allows subclasses to access the private property
    abstract makeSound(): void; // Abstract method
    move(): void {
        console.log(`${this.getName()} is moving...`); // Use the getter to access the name
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the abstract class
    }
    makeSound(): void {console.log("Woof!");}
    printName(): void {
        console.log(`Dog's name is: ${this.getName()}`); // Calling getName() directly
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the abstract class
    }
    makeSound(): void {
        console.log("Meow!");
    } 
    printName(): void {
        console.log(`Cat's name is: ${this.getName()}`); // Calling getName() directly
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Output: Woof!
dog.move();      // Output: Buddy is moving...
dog.printName(); // Output: Dog's name is: Buddy

cat.makeSound(); // Output: Meow!
cat.move();      // Output: Whiskers is moving...
cat.printName(); // Output: Cat's name is: Whiskers

export {}