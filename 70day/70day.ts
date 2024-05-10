/*******************
 * INTERFACE INTRO *
 *******************/

interface PersonEx1 {
    name: string;
    age: number;
  }
  
  const John: PersonEx1 = {
    name: "John",
    age: 30,
  };


  /***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

// Define an interface 'Person' with a method 'greet'
interface PersonEx2 {
    name: string;
    age: number;
    greet(message: string): void;
  }
  
  // Create an object that adheres to the 'Person' interface
  const Sarah: PersonEx2 = {
    name: "Sarah",
    age: 30,
    greet(message: string) {
      console.log(`${this.name} says: ${message}`);
    },
  };
  
  Sarah.greet("Hello, TypeScript!"); // Output: Alice says: Hello, TypeScript!



  /**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

// Homepage Interface Declaration
interface Settings {
    readonly theme: boolean;
    font: string;
  }
  
  // Articles Page Interface Reopening
  interface Settings {
    sidebar: boolean;
  }
  
  // Contact Page Interface Reopening
  interface Settings {
    external: boolean;
  }
  
  // Create an object 'userSettings' that adheres to the merged 'Settings' interface
  let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
  };



  /********************
 * HTMLIMAGEELEMENT *
 ********************/

// This example is for educational purposes, but it is not going to work. 
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}



/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

// Declaration Syntax:

// Interface
interface PersonExInterface {
    name: string;
    age: number;
  }
  
  // Type
  type PersonExType = {
    name: string;
    age: number;
  };
  
  // Extending And Implementing:
  
  // Interface
  interface AnimalExInterface {
    type: string;
  }
  
  interface Dog extends AnimalExInterface {
    bark(): void;
  }
  
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
  }
  
  // Type
  type AnimalExType = {
    type: string;
  };
  
  type Monkey = AnimalExType & {
    bark(): void;
  };
  
  const labrador: Monkey = {
    type: "monkey",
    bark() {
      console.log("Woof!");
    },
  };
  
  // Compatibility:
  interface Car {
    brand: string;
  }
  
  interface Car {
    model: string;
  }
  
  const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
  };