import chalk from "chalk";
//Question:124;
const Student = {
  studentName: "Kanwal",
  
  name() {
    return this.studentName 
  },
};
console.log(chalk.yellow(Student.name()));


//Question:125;

const Area = {
  width:20,
  hight:3,
  
  getArea() {
    return this.width *this.hight
  },
};
console.log(chalk.yellow(Area.getArea()));

//qUESTION:126;
const myObject = {
  proprty: "Value",

  outerFunction (){
    console.log(chalk.green(this.proprty))

  const innerFunction =() =>{
console.log(chalk.yellow(this.proprty))
    }
    innerFunction()
  }
  
}
myObject.outerFunction()


