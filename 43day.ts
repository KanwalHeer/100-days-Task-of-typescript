//Question:127;
// Traditional function expression
const traditionalFunction = function (a:number, b:number) {
    return a + b;
  };
  // Converted to arrow function
  const arrowFunction = (a:number, b:number) => a + b;
  console.log(traditionalFunction(5, 3));
  console.log(arrowFunction(5, 3)); 


  //Question:128;
const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
 console.log(multiplyParameters(2, 3, 4)); 

//Question:129;
 let  myobject = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); 
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); 
    },
  };
  myobject.traditionalFunction(); 
  myobject.arrowFunction(); 


//  Question:129;
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value);
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.value); 
  },
};
traditionalVsArrow.traditionalFunction(); 
traditionalVsArrow.arrowFunction();
