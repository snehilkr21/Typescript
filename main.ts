function defectType(val:string|number|number[]){
    if(val==='string'){
        return val.charAt(1)
    }else if(val==='object'){
        return val[0]
    }
    return val.toString()
}
console.log(defectType([10]))