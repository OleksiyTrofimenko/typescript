const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    console.log(this);
    this.age = age;
  },
};

const {
  age,
  coords: { lat, long },
} = profile;
