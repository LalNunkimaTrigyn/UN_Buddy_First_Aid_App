import { Injectable } from "@angular/core";

import { Storage } from "@ionic/storage";
// import { Geolocation } from '@ionic-native/geolocation';  // Import Geolocation plugin
import { Geolocation } from "@ionic-native/geolocation";

@Injectable()
export class LocationService {
  public latitude: number;
  public longitude: number;

  constructor(public storage: Storage, public geolocation: Geolocation) {}
  geolocationEnabled: boolean = false;

  setLocation(lat: number, long: number) {
    this.latitude = lat;
    this.longitude = long;
  }

  getLocation() {
    return { latitude: this.latitude, longitude: this.longitude };
  }

  onToggleGeolocation() {
    this.geolocationEnabled = !this.geolocationEnabled;
    console.log(this.geolocationEnabled);
    this.storage.set("geolocationEnabled", this.geolocationEnabled);

    if (this.geolocationEnabled) {
      this.enableGeolocation();
    } else {
      this.disableGeolocation();
    }
  }

  enableGeolocation() {
    this.geolocation
      .getCurrentPosition()
      .then(async (resp) => {
        console.log("Latitude:", resp.coords.latitude);
        console.log("Longitude:", resp.coords.longitude);

        // Store the geolocation in the service
        this.setLocation(resp.coords.latitude, resp.coords.longitude);

        await this.storage.set("lat", resp.coords.latitude);
        await this.storage.set("lon", resp.coords.longitude);
      })
      .catch((error) => {
        console.error("Error getting location", error);
      });
  }

  disableGeolocation() {
    console.log("Geolocation disabled");
    // Implement any additional logic if you need to stop geolocation tracking
  }
  loadGeolocationStatus() {
    this.storage.get("geolocationEnabled").then((status) => {
      if (status !== null) {
        this.geolocationEnabled = status; // Load the saved state
      }
    });
  }
}
