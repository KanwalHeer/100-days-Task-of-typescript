import chalk from "chalk";
//Question:115;
function Days(day:number) {
switch (day) {
    case 1:
        console.log(chalk.yellow(`Sunday`))
        break;
        case 2:
        console.log(chalk.yellow(`Monday`))
        break;
        case 3:
        console.log(chalk.yellow(`Tuesday`))
        break;
        case 4:
        console.log(chalk.yellow(`Wednesday`))
        break;
        case 5:
        console.log(chalk.yellow(`Thursday`))
        break;
        case 6:
        console.log(chalk.yellow(`Friday`))
        break;
        case 7:
        console.log(chalk.yellow(`Saturday`))
        break;
    default:
        console.log(chalk.red(`Invalid day number!`))
        break;
}}
Days(3)

//Question:116;
function ageCategories(age: number): void {
    switch (age) {
      case 12:
      case 1:
      case 2:
        console.log(chalk.green("child"));
        break;
      case 14:
      case 17:
      case 15:
        console.log(chalk.magenta("teenager"));
        break;
      case 22:
      case 30:
      case 25:
        console.log(chalk.yellow("Adult"));
        break;
      default:
        console.log(chalk.red("invalid age"));
        break;
    }
  }
   ageCategories(2)
   ageCategories(14); 
   ageCategories(22)
   ageCategories(166)




//Question:117;
function Grade(grades: string): void {
    switch (grades) {
      case "A":
        console.log(chalk.green("Excellent"));
        break;
      case "B":
        console.log(chalk.magenta("Good"));
        break;
      case "C":
        console.log(chalk.cyan("Fair"));
        break;
      case "D":
        console.log(chalk.yellow("Poor"));
        break;
      case "F":
        console.log(chalk.red("Fail"));
        break;
      default:
        console.log(chalk.red("Invalid grade"));
        break;
    }}
  Grade("A");
  Grade("C");
  Grade("D");
  Grade("N");