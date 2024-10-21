class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }

    setContent(value: T): void {
        this.content = value;
    }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContent());  

const stringBox = new Box<string>("Hello, World!");
console.log(stringBox.getContent());  

const objectBox = new Box<{ name: string }>({ name: "Snehil" });
console.log(objectBox.getContent());  

stringBox.setContent("Updated!");
console.log(stringBox.getContent()); 

export {}