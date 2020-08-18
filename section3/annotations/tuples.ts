const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
const tea: Drink = ["brown", false, 0];
pepsi[0] = "temp";

const carSpecs: [number, number] = [300, 3354];

const carStats = {
  horespower: 400,
  weight: 3354
};
