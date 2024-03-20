// //Question 58;
// let allScore = [55, 77, 88, 65, 99, 66];
// let sum = allScore.reduce((score, indes) => score + indes, 0);
// let avrgScr = sum / allScore.length;
// console.log(avrgScr);
// //Question 58;
// function averageScore(...score: number[]): number {
//   let sum = score.reduce((score, indes) => score + indes, 0);
//   let avrgScr = sum / score.length;
//   return avrgScr;
// }
// let average = averageScore(80, 90, 100, 70);
// console.log(average);
// let average1 = averageScore(55, 77, 88, 65, 99, 66);
// console.log(average1);

//Question 59;
// class CustomNumber {
//   private numberToAdd: number;
//   constructor(numberToAdd: number) {
//     this.numberToAdd = numberToAdd;
//   }
//   Add(num: number): number {
//     return num + this.numberToAdd;
//   }
// }
// let numAdd4 = new CustomNumber(4);
// console.log(numAdd4.Add(6));

// let numAdd5 = new CustomNumber(5);
// console.log(numAdd5.Add(10));

//Q UESTION 60;
function profile() {
  let  Name = "Kanwal"
  let age = 22
  return{ 
    displayProfile : function(){
   console.log(`name: ${Name} , age: ${age}`)
  }}
}
let profileIs= profile()
profileIs.displayProfile()