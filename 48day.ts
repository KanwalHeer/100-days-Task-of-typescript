import chalk from "chalk"
//Question:142;
//Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(chalk.yellow("Hello, World!"));
    }, 2000);
  });
  
   helloPromise.then((message) => console.log(message));
 // After 2 seconds, "Hello, World!" will be logged to the console.


  //Question:143;
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5; 
    if (success) {
      resolve(chalk.green("Success!"));
    } else {
      reject(new Error(chalk.red("Failure")));
    }
  });
  
  conditionalPromise
    .then((result) => console.log(result)) 
    .catch((error) => console.log(error.message)); 

//Question:144;
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); 
});

  