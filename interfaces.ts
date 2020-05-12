// First char is upper, abstraction
interface Vehicle2 {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle2): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
