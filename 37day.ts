import chalk from "chalk"
// //Question: 109;
const date = new Date()
const hours =date.getHours()
const min = date.getMinutes()
const second = date.getSeconds()
if (hours < 24 && hours > 12) {
    console.log(chalk.yellow(`Time: ${hours}:${min}:${second} AM`))
    console.log(chalk.green("Good Morning"))
}else{
    console.log(chalk.yellow(`Time: ${hours}:${min}:${second} PM`))
    console.log(chalk.green("Good night"))
}

// //Question:110;
console.log(chalk.cyanBright("Question:110;"))
function Grades(scor:number) {
if (scor <=100 && scor >= 80) {
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.green(`Student grade is "A+"`))
} else if(scor <=80 && scor >= 70) {
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.green(`Student grade is "A"`))
}else if(scor <=70 && scor >= 60) {
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.green(`Student grade is "B"`))
}else if(scor <=60 && scor >= 50) {
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.green(`Student grade is "C"`))
}else if(scor <=50 && scor >= 40) {
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.green(`Student grade is "D"`))
}else if(scor <=40 && scor >= 30) {
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.magenta(`Student grade is "F"`))
}else{
    console.log(chalk.yellow(`Student Score: ${scor}`))
    console.log(chalk.redBright("Please enter valid scor"))
}
}
Grades(50)
Grades(85)
Grades(35)
Grades(75)
Grades(65)
Grades(5)
Grades(55)


//Question:111;
function Age(age:number) {
if (age <= 13) {
    console.log(chalk.yellow(`Age :${age},Category:Child`))
}else if (age <= 19) {
    console.log(chalk.yellow(`Age :${age},Category:Teenager`))
}else {
    console.log(chalk.yellow(`Age :${age},Category:Adult`))
}
}
Age(11)
Age(18)
Age(22)