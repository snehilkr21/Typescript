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
    cupon: (cuponName: string) => {  
      return true;
    }
  };

  console.log(newUser.cupon("snehil"))
  console.log(newUser);
  
  export {};
  