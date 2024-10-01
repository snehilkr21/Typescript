class User {
    private password: string;
  
    constructor(password: string) {
      this.password = password;
    }
  
    private displayPassword() {
      console.log(`Password: ${this.password}`);
    }
  }
  
  const user = new User("secret123");
  // console.log(user.password);  // Error: Cannot access private property
  // user.displayPassword();      // Error: Cannot access private method
            
  
  
  export {};
  