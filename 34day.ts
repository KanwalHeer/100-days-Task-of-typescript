// Question 100:* Use the JavaScript Math object to find the square root of 144.

function squareRoot(num:number):number {
    return Math.sqrt(num)
}
console.log(squareRoot(144))
console.log(squareRoot(9))




//*Question 101:* Generate a random integer between 1 and 10.

function getRandomInt(): number {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInt()); 

// //*Question 102:* Calculate and log the absolute difference between the number -5 and 5.


function difference(num:number):number {
    return Math.abs(num)
}
console.log(difference(-5-5))
console.log(difference(-4-4))