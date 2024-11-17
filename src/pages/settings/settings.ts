import { Component } from "@angular/core";
import { NavParams, ModalController, NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";
// import { Geolocation } from '@ionic-native/geolocation';  // Import Geolocation plugin
import { Geolocation } from "@ionic-native/geolocation";
import { LocationService } from "../../app/services/location.service";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html",
})
export class SettingsPage {
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public storage: Storage,
    public geolocation: Geolocation,
    public locationService: LocationService
  ) {}

  ENG = false;
  FR = false;
  ES = false;
  LanguageSelect: string;
  geolocationEnabled: boolean = false; // This will be bound to the toggle

  ionViewWillLoad() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          this.ENG = true;
          this.FR = false;
          this.ES = false;
        }
        if (data === "ES") {
          this.ENG = false;
          this.ES = true;
          this.FR = false;
        }
        if (data === "FR") {
          this.ENG = false;
          this.FR = true;
          this.ES = false;
        }
      } else {
        this.ENG = true;
        this.ES = false;
        this.FR = false;
        this.storage.set("Language", "ENG");
      }
    });

    this.locationService.loadGeolocationStatus();
    this.geolocationEnabled = this.locationService.geolocationEnabled;
  }

  sendLocationViaWhatsApp() {
    const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  }

  sendLocationViaSMS() {
    const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
    window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
  }

  sendLocationViaMessenger() {
    const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
    window.open(
      `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  onToggleGeolocation() {
    this.locationService.onToggleGeolocation();
  }

  sendLocationViaEmail() {
    const subject = "My Current Location";
    const body = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
    window.open(
      `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`,
      "_blank"
    );
  }

  onCancel() {
    console.log("OnCancelFired");
  }

  onChange() {
    if (this.LanguageSelect === "ENG") {
      this.ENG = true;
      this.FR = false;
      this.ES = false;
      this.storage.set("Language", "ENG");
    }
    if (this.LanguageSelect === "ES") {
      this.ENG = false;
      this.ES = true;
      this.FR = false;
      this.storage.set("Language", "ES");
    }

    if (this.LanguageSelect === "FR") {
      this.ENG = false;
      this.ES = false;
      this.FR = true;
      this.storage.set("Language", "FR");
    }
  }
}
