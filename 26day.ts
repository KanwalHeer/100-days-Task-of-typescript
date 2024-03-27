
//Question : 76;
function AddSum(num1:number,num2:number):number{
   return num1 + num2 
}
console.log(AddSum(4 ,6))


//Question : 77;
function defaultPERA(pera1:string,pera2:string="anynomouse") {
    console.log(`${pera1} ${pera2}`)
}
defaultPERA("hello","Knwalheer")
defaultPERA("hello")



//Question: 78;

function squire1(n1:number):number {
    return n1 * n1
}
console.log(squire1(5))
const squire2 = function(n1:number):number{
      return n1 * n1
}
console.log(squire2(5))
