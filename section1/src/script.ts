let greet = () => {
  console.log("Heloo world");
};

let greeting: Function;

// greeting = 'dvs';

greeting = () => {
  console.log("this is function");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(4, 3);
add(9, 3, "fdfgdds");

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 17);

console.log("dev: result", result);

// result = "svcadv"
