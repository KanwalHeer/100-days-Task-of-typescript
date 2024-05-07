/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/
// Annotating an array of strings
var fruits = ["apple", "banana", "cherry"];
// Using a loop to process each element in the array
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit: ".concat(fruits[i].toUpperCase()));
}
/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = ["A", "B", "C"];
var arrayThree = [1, 2, 3, 4, "A", "B", "C"];
