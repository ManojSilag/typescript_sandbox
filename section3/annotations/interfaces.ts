interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string{
      return `Name: ${this.name}`
  }
};

const drnk = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return 'my drink is complete'
    }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`${vehicle.name} , ${vehicle.year} , ${vehicle.broken}`);
};

printVehicle(oldCivic);
