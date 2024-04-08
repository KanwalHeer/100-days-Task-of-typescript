
import chalk from "chalk"
//Question: 112;
const countries = new Map<string,string>()
console.log(chalk.yellow.bold.italic("Countries And thir Capitals"))
countries.set("1: Pakistan","Islamabad \n")
countries.set("2: Banghladash","Dhaka\n")
countries.set("3: France","Paris")
console.log(chalk.cyanBright.bold.italic(...countries))
console.log(chalk.yellow.bold.italic("*************************"))


//Question:113;
const countries1 = new Map<string,string>()
    countries1.set("1: Pakistan","Islamabad \n")
    countries1.set("2: Banghladash","Dhaka\n")
    countries1.set("3: France","Paris")
function mapHasGety(countries:Map<string,string>):void {
    if (countries.has("Japan")) {
        console.log(chalk.yellow(`The Capital of Japan is ${countries.get("Japan")}`))
    }else{
        console.log(chalk.red.bold.italic(`Japan is not in Map`))
    }
}
mapHasGety(countries1)

//Question:114;
const students = new Map<number,string>()
students.set(1,"Kanwal Heer")
students.set(2,"Naimal Arain")
students.set(5,"Fiza Lnghah")
students.forEach((studentName ,studentId) => {
        console.log(chalk.yellow(`Student id: ${chalk.green(studentId)}\nStudent Name: ${chalk.green(studentName)}`))
    });
