//Question:145;
// // This function accepts a callback function and invokes it with given arguments
// function executeCallback( callback: (arg1: number, arg2: number) => void, arg1: number, arg2: number ): void {
//     callback(arg1, arg2); 
// }
//   // Example callback function that adds two numbers
//   const add = (a: number, b: number) => {
//     console.log(a + b); 
//   };
//   executeCallback(add, 4, 3); 

//Question:146;

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const filteredNumbers: number[] = numbers.filter((num) => num > 4);

// console.log(filteredNumbers); 


//Question:147;
// function fetchData(callback: (error: Error | null, data?: string) => void): void {
//     const error = new Error("Failed to fetch data");
//     const data = "Some data";
    
//     if (Math.random() > 0.5) {
//       callback(null, data); 
//     } else {
//       callback(error); 
//     }
//   }
//   const callback = (error, data) => {
//     if (error) {
//       console.error(error.message); 
//     } else {
//       console.log(data); 
//     }};
// fetchData(callback)

if (!( true && false)) {
  console.log("hello")
}else{
  console.log("bye")
}



  

