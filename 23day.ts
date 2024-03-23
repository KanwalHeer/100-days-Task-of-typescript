//Question: 67;

function MIxed(str:string,num:number) {
    
    return  Number(str) + num
}
 console.log(MIxed("5",5))
 console.log(MIxed("20",10))
 console.log(MIxed("6",4))



//Question: 68;
function roundNumber(num1:number,num2:number):number {
    return Math.round((num1 * num2)*100)/100
}
 console.log(roundNumber(0.3,0.4))
 console.log(roundNumber(0.1,0.2))


//Question: 69;
 type obj = {
    quotient:number;
    remainder:number
 }
 function dividions(dividend:number,divisor:number):obj {
    let quotient = Math.floor(dividend / divisor)
    let remainder = Math.floor(dividend % divisor)
    return {quotient,remainder}
 }

 console.log(dividions(10,3))
