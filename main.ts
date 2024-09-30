type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

// Intersection type: an object must have properties from both Person and Employee
type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
    name: "Snehil",
    age: 25,
    employeeId: "E123",
    department: "Engineering"
};

console.log(employee);


export {}