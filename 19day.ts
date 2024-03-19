//Question : 55;
let arrayNum:number[] = [1,2,3,4,4]
  let numbers = arrayNum.map(num => num * 2)

 //console.log(numbers)

 //Question : 56;
 let misArray = [3,false,"kanwal",5,6,true,"heer","keep",5,"coding"]
 let newArray = misArray.filter( arr =>typeof arr === "string")
 //console.log(newArray)
 

 //Question : 57;
 //first patteern
 let grades = [88,94,72,99,53,77]
 let average = grades.reduce((total,grades)=> total + grades ,0) /grades.length
 console.log(average)

//second pattern
 function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
let grades3 = [88, 94, 72, 99, 53, 77];
let average1 = calculateAverage(grades3);
console.log("Average:", average1);
//third pattern
let grades4 = [88, 94, 72, 99, 53, 77];
let sum1 = 0;
    for (let i = 0; i < grades.length; i++) {
        sum1 += grades[i];
    }
    console.log( sum1 / grades.length)
