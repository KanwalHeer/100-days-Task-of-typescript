//Question: 61
enum VEHICLES {
    CAR,
    TRUCK,
    MOTORCYCLES,
    BUS
}
console.log(VEHICLES)
console.log(VEHICLES.BUS)
console.log(VEHICLES.CAR)
console.log(VEHICLES.TRUCK)
console.log(VEHICLES.MOTORCYCLES)

//Question:62

class StudentData {
    name:string;
    age:number;
    constructor(name1:string,age:number){
       this.name = name1
       this.age = age
    }
}
const student1 = new StudentData("Kanwal",22)
const student2 = new StudentData("Fiza",20)
const student3 = new StudentData("Naimal",23)
console.log(student1)
console.log(student2)
console.log(student3)

//Question : 63
type Shap = {
    kind: "circle" | "rectangular";
    radius?: number;
    width?:number;
    hight?:number;
}
let circle:Shap ={
    kind:"circle",
    radius:5
}
let rectangular:Shap = {
    kind: "rectangular",
    hight:10,
    width:20
}
console.log(circle)
console.log(rectangular)

