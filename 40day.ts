import chalk from "chalk";
//Question:118

for (let i = 1; i <= 10; i++) {
   console.log(i); 
  }
 


//Question:1119;

let count: number = 0;
while (count < 5) {
  console.log(chalk.cyan("Hello, World!")); 
  count++; 
}


//Question:120;
  let Names:string[] = [
    "Filza",
    "Kanwal",
    "Naimal",
    "Fiza"
  ] 
  for (const name of Names) {
    console.log(chalk.yellow(name))
  } 

