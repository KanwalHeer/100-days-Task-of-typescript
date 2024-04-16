//Question:133;

const person1 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
  const jsonString1 = JSON.stringify(person1);
  
  console.log(jsonString1); 

  //Question:134;
  
const jsonString2 = '{"name":"Alice","age":30,"city":"Wonderland"}';
const person2 = JSON.parse(jsonString2);
console.log(person2); 

//Question:135;
const person3 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
  
  const jsonString3 = JSON.stringify(person3, null, 2); 
  console.log(jsonString3);
  