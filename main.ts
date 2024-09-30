type Dog = {
    breed: string;
    bark: () => void;
};

type Cat = {
    breed: string;
    meow: () => void;
};

function makeSound(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark();   // TypeScript knows this must be a Dog
    } else {
        animal.meow();   // TypeScript knows this must be a Cat
    }
}

let myDog: Dog = { breed: "Labrador", bark: () => console.log("Woof!") };
let myCat: Cat = { breed: "Persian", meow: () => console.log("Meow!") };

makeSound(myDog);   // Output: Woof!
makeSound(myCat);   // Output: Meow!


export {}