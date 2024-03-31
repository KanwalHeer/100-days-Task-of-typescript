// //Question:91;
// let fruits:string[] = ["Apple","Banana","Orange","Mango"]
// console.log(fruits)
// fruits.push("Graps","Cherry")
// console.log(fruits)




// //Question: 92;
// let friends:string[]=["Naimal","Filza","Fiza","Maheen"]
// console.log(friends)
//  friends.pop()
//  console.log(friends)



//Question: 93;
function replaceFruite(fruits:string[]):void {
    let MyFavoriteFruits = fruits.indexOf("Banana")

    if (MyFavoriteFruits !== -1) {
        fruits[MyFavoriteFruits] = "Mango"
    }
}

let Fruits:string[] = ["Apple","Banana","Orange","Mango"]
replaceFruite(Fruits)
console.log(Fruits)