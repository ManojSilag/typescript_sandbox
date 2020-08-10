let apples: number = 54;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//array
let colors: string[] = ["red", "blue"];
let num: number[] = [1, 32];

//classes
class Car {}
let newCar: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 34
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};




//When to use annootations
//1) Function that returns the 'any' type
const json = '{"x": 10, "y":20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates);

//2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean;
for(const value of words){
    if(value === 'green'){
        foundWord = true;
    }
}

//3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 13]
let numberAboveZero: boolean | number = false;
for(const value of numbers){
    if(value > 0 ){
        numberAboveZero = value;
    }
}