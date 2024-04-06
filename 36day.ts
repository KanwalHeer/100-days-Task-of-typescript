//Question : 106
 import chalk from "chalk";

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  console.log(chalk.cyan("Question:106"))
  console.log(isLeapYear(2020)); 
  console.log(isLeapYear(1900)); 
  console.log(isLeapYear(2000)); 
 
 //Question : 107
  
function isDivisibleByTwoAndThree(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
  }
  console.log(chalk.cyan("Question:107"))
  console.log(isDivisibleByTwoAndThree(12)); 
  console.log(isDivisibleByTwoAndThree(18)); 
  console.log(isDivisibleByTwoAndThree(24)); 
 
//   //Question : 108
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    
    return str1.toLowerCase() === str2.toLowerCase();
  }
  console.log(chalk.cyan("Question:108"))
  console.log(chalk.yellow(areStringsEqualIgnoreCase("hello", "Hello"))); 
  console.log(chalk.yellow(areStringsEqualIgnoreCase("world", "Word"))); 
  console.log(chalk.yellow(areStringsEqualIgnoreCase("heeri", "Heeri"))); 
 
 