// Define an abstract class
abstract class Animal {
    // Abstract method
    abstract makeSound(): void;

    // Concrete method
    move(): void {
        console.log("Moving...");
    }
}

// Subclass extending the abstract class
class Dog extends Animal {
    // Providing implementation for the abstract method
    makeSound(): void {
        console.log("Woof!");
    }
}

// Subclass extending the abstract class
class Cat extends Animal {
    // Providing implementation for the abstract method
    makeSound(): void {
        console.log("Meow!");
    }
}

// Cannot create an instance of Animal
// const animal = new Animal(); // Error: Cannot create an instance of an abstract class

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move();      // Output: Moving...

const cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move();      // Output: Moving...

export {}