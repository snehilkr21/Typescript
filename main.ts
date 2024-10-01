class User {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public greet() {
      console.log(`Hello, ${this.name}`);
    }
  }
  
  const user = new User("Snehil");
  console.log(user.name);  
  user.greet();            
  
  
  export {};
  