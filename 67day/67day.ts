/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/

// Annotating an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}


/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];