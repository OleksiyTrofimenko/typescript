import faker from 'faker';
import { Mappable } from './CustomMap';

// implements Mappable
// implements - tell that User satisfied all the properties required by Mappable interface

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `User name ${this.name}`;
  }
}
