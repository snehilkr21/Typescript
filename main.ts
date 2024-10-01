interface User {
    readonly id: number;
    email: string;
    userId: number;
    startTrail: () => string;
    cupon: (cuponName: string) => boolean;  
  }
  
  const newUser: User = {
    id: 33,
    email: "sn@gmail.com",
    userId: 55,
    startTrail: () => {
      return "snehil";
    },
    cupon: (cuponName="snehil") => {  
      console.log("cuponName " ,cuponName)
      return true;
    }
  };

  console.log(newUser.cupon(""))
  console.log(newUser);
  
  export {};
  