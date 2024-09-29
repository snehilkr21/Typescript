type User = {
    name : string;
    email : string;
    isActive : boolean
}
function createuser(user:User):User{
  return {email:"",name:"",isActive:true}
}
let data = createuser({email:"",name:"",isActive:false})
console.log("data",data)

export {}