class User{
   private email : string;
   constructor (_email:string){
    this.email = _email;
   }
   get getEmail() : string{
       return this.email
   }

   set setEmail(_email:string){
    if (_email) {
        this.email = _email;
      } else {
        console.log("Invalid email address");
      }
   }
}
  
const user = new User("a@gmail.com")
console.log(user.getEmail)
user.setEmail = "a@gmail.com"
console.log(user.getEmail)
  
export {};
  