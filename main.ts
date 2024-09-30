 let data1 : number[] = [1,2,3] // it suggest that it can store only number
 let data2 : string[] = ["1","2","3"] // it reflect that it can only store the string
 let data3 : string[] | number[] = [1,2,3] //it either store the number or string
 let data4 : (string | number) [] = [1,2,"3"] // it store both number and string


export {};
