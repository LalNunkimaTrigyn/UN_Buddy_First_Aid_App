import { Injectable } from "@angular/core";

@Injectable()
export class LocationService {
  public latitude: number;
  public longitude: number;

  constructor() {}

  setLocation(lat: number, long: number) {
    this.latitude = lat;
    this.longitude = long;
  }

  getLocation() {
    return { latitude: this.latitude, longitude: this.longitude };
  }
}
