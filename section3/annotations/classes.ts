class Vehicle {

  constructor(public color: string){
  }

  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  public honk(): void {
    console.log("beep");
  }

}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.drive();
vehicle.honk();


class Car extends Vehicle {

  constructor(public wheels: number, color: string){
    super(color)
  }

  private drive(): void {
    console.log("vroom");
  }

  starttDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4,'voilet');
car.starttDrivingProcess();
car.honk();