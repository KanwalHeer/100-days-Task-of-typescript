//Question : 46
interface Laptop {
  make: string;
  model: string;
  year: number;
  Describe(): void;
}

const myLaptop: Laptop = {
  make: "Dell",
  model: "Xps 17",
  year: 2023,
  Describe() {
    console.log(`my laptob is very fast to use`);
  },
};
console.log(myLaptop);
myLaptop.Describe();

//Question : 47;
interface Laptops {
  make: string;
  model: string;
  year: number;
}
const myLaptops: Laptops[] = [
  {
    make: "Dell",
    model: "Xps 15",
    year: 2022,
  },
  {
    make: "Dell",
    model: "Xps 16",
    year: 2021,
  },
];
let [laptop1, laptop2] = myLaptops;
console.log([laptop1, laptop2]);

//Question : 48;

function sortedArrays(arr1: number[], arr2: number[]): number[] {
  let sortedarray = [...arr1, ...arr2].sort((a, b) => a - b);
  return sortedarray;
}
let priceSet1: number[] = [50000, 40000, 60000];
let priceSet2: number[] = [30000, 20000, 10000];

let combineArray = sortedArrays(priceSet1, priceSet2);
console.log(combineArray);
