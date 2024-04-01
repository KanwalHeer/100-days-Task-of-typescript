//Question: 94;
function Array(arr:string[]):number[] {
    let newArr:number[]=arr.map((item=>item.length))
    return newArr
}
let myarray =["Hello","Heeri","How","Are","You"]
console.log(myarray)
console.log(Array(myarray))

//question: 95;
function FillterNumber(arr:number[]):number[] {
    let array:number[]=arr.filter((num => num > 10))

    return array
}
 let numArray = [8,56,4,23,3,2,12,9,]
 
 console.log(FillterNumber(numArray))

//Question: 96;
function ReduceFunction(numbers:number[]):number {
    let result = numbers.reduce((index,num)=> index + num ,0)
    return result
} 
let numbers = [6,8,4,3,2,1,6]  //sum is 30
console.log(ReduceFunction(numbers))