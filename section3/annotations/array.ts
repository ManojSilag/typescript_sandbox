const carMakers = ["ford", "toyoto", "chevy"];

const onlineExpress: string[] = [];

const bikemaker = [["stf"], ["dfdf"]];

const onlineDelv: string[][] = [];

//Help with interence when extracting values

const car = carMakers[0];

const myCar = carMakers.pop();

// prevent incompatiable values
carMakers.push(100);

//Help with 'map
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const impDates: (Date | string)[] = [ new Date(), '2020-12-23'];
