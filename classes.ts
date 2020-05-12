class Vehicle {
  // Firs way to declare properties

  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // Second way to declare properties with public
  constructor(public color: string) {}

  protected drive(): void {
    console.log('something');
  }

  private honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// Take all essential methods and copy paste in to Car class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('Vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

// get access to all defined keys inside
// const vehicle = new Vehicle();
const car = new Car(4, 'red');

car.startDrivingProcess();
// car.honk(); // Error because function is private and acceptable inside Class
