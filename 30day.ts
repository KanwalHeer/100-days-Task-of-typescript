//Question: 88;
function Rounder(num:number):number {
  return  Math.round(num)
}
console.log(Rounder(3.5))
console.log(Rounder(8.6))
console.log(Rounder(2.7))



//Question:89;
function strToNum(str:string,str2:string):number {
    return parseFloat(str + str2)
}
console.log(strToNum("4","6"))
console.log(strToNum("4.5","5.5"))


//Question:90;
function notAnumber(value:any):boolean {
    return isNaN(value)
}
console.log(notAnumber("kanwal"))
console.log(notAnumber(123))