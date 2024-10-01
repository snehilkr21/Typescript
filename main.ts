class User {
    
  
    constructor(
      readonly id: number,
      public name: string,
      private password: string,
      public email: string
    ) {
      this.id = id;
      this.name = name;
      this.password = password;
      this.email = email;
    }
  
    // Corrected the 'print' method, now it's a regular method
    print(): void {
      console.log(`User: ${this.name}, Email: ${this.email}, id : ${this.id}, Password : ${this.password}`);
    }
  }
  
  const user = new User(123, "Snehil", "secret123", "snehil@example.com"); 
  
  user.print();
  
  export {};
  