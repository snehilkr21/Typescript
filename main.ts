type User = {
    name : string;
    email : string;
    isActive : boolean
}
function createuser(user:User){
  console.log("user",user)
}
createuser({email:"",name:"",isActive:false})

export {}