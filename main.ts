class Person {
    public name: string;       // Public property
    protected email: string;   // Changed to protected
  
    constructor(name: string, email: string) {
      this.name = name;        // Initialize name in the constructor
      this.email = email;      // Initialize email in the constructor
    }
  
    public greet(): void {
      console.log(`Hello, my name is ${this.name} and my email is ${this.email}`);
    }
  }
  
  class Employee extends Person {
    private position: string;
  
    constructor(name: string, email: string, position: string) {
      super(name, email); // Calling the parent constructor with both name and email
      this.position = position;
    }
  
    public introduce(): void {
      console.log(`I am ${this.name}, and I work as a ${this.position}.`);
      this.greet(); // Calling the inherited public method
    }
  
    public showEmail(): void {
      console.log(`My email is ${this.email}`); // Accessing protected email property
    }
  }
  
  const emp = new Employee("John", "john@example.com", "Developer");
  emp.introduce(); // Works, can access public members directly
  
  // Directly accessing public properties
  console.log(emp.name); // Output: John
  
  // Error: Property 'email' is protected and only accessible within class 'Person' and its subclasses
  // console.log(emp.email); // Uncommenting this line will cause an error
  
  // Using a method in the subclass to access the protected email
  emp.showEmail(); // Output: My email is john@example.com
  export {}
  // Directly calling the public method
  emp.greet(); // Output: Hello, my name is John and my email is john@example.com
  