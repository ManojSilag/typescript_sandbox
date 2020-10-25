class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);
new ArrayOfAnything<number>([1, 2, 3, 4]);

//Example of generics with functions

function printString(array: string[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printNumbers(array: Number[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printAnyThing<T>(array: T[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

printAnyThing<string>(["a", "b", "c"]);
printAnyThing<Number>([1, 2, 3, 4]);

//Example of Generics Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}
interface Printable {
    print(): voide
}

function printHousesOrCars<T extends Printable>(array: T[]): void {
    for (let index = 0; index < array.length; index++) {
       array[index].print();
      }

}

printHousesOrCars([1,2,3,4])