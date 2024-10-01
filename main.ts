abstract class Animal {
    abstract name: string; 

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving...`);
    }
}
class Dog extends Animal {
    name: string;

    constructor(name: string) {
        super();
        this.name = name; // Setting the value of the abstract property
    }

    makeSound(): void {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    name: string;

    constructor(name: string) {
        super();
        this.name = name; // Setting the value of the abstract property
    }

    makeSound(): void {
        console.log("Meow!");
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof!
dog.move();      // Output: Buddy is moving...

const cat = new Cat("Whiskers");
cat.makeSound(); // Output: Meow!
cat.move();      // Output: Whiskers is moving...

export {}