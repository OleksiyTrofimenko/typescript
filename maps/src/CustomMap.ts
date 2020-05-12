// Hide from other engineers
declare const google: any; // In case when google is undefined and ts get error

import { User } from './User';
import { Company } from './Company';

// If many classes have similar key, just create one common interface
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map; // We don't anyone else make instances

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Solution with good approach for avoiding duplication
  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }

  // Bad approach with duplicating code
  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
