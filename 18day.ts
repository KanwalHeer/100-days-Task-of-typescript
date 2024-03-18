//Question :52;
let smartPhon = {
   make:"infinix",
   model: "Hot 30",
   detailes:{
    RAM:"8 GB",
    Storage:"256 GB",
    Bettery: "500 mAh",
    screen:"6.8 Inches",
    cemera:"64 MP,f/1.7"
   }
}
//console.log(smartPhon)


 //Question : 53;
const ProgrammerSkills = {
     languages:["typescript","python","c++"],
     tools:["VCS","Git","GDB"],
     framwork:["Express.js","React","Spring Boot"]
}
let {languages,tools,framwork} = ProgrammerSkills
//console.log(` Lnguage:${languages[0]},Tool: ${tools[0]}, Framework: ${framwork[0]}`)

//Question:54;

 function dinemicKey(key:string,value:string){
   let dynamicObject = {}
   dynamicObject[key]=value
   return dynamicObject
   
 }
 let myDynamicObject = dinemicKey("name","kanwal")
 console.log(myDynamicObject)
 let myDynamicObject1 = dinemicKey("favoritColor","Blue")
 console.log(myDynamicObject1)