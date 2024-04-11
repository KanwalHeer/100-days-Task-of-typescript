import chalk from "chalk";
//Question:121;
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
}

//Question:122
let i = 10
while ( i > 0) {
   
    if (i === 5) {
       break
    }
    console.log(i)
    i--
} 

//Question:123

function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(chalk.green(`First vowel found: ${char}`));
        break; 
      }
      console.log(chalk.yellow(char)); 
    }
  }
  logUntilVowel("syzygy"); 
  console.log(chalk.magenta("______________________"))
  logUntilVowel("yhmtop")