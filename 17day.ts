//Question :49;
function RestPera(arr:string[]) {
    arr.forEach(hobby => {
        console.log(`I enjoy ${hobby}`)
    });
}
let myHobbies = ["coding","raading","sleeping"]
RestPera(myHobbies)

//Question : 50;
 const myIdealDayIs = `My ideal day whould involes,
 1: combine study with friends.
 2: work on my personal project.
 3: spend time wioth family.`
 console.log(myIdealDayIs)

 //Question :51;
 function simpleFunction(hight:number,width:number):number {
    let area = hight * width
    return area
 }
 let AreaIs = simpleFunction(20,3)
 console.log(AreaIs)

const arrowFunction  = (hight:number,width:number):number=>{
    let area = hight * width
    return area
}
let newArea = arrowFunction(20,3)
console.log(newArea)
