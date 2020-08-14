const profile = {
  name: "john",
  age: 21,
  coords: {
    lat: 0,
    lng: 23
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name }: { age: number, name: string } = profile;
const { coords: {lat, lng} }: {coords: { lat: number, lng: number}} = profile;