import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavParams, ModalController, NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";
// import { Geolocation } from '@ionic-native/geolocation';  // Import Geolocation plugin
import { Geolocation } from "@ionic-native/geolocation";
import { LocationService } from "../../app/services/location.service";
import { Subscription } from "rxjs";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html",
})
export class SettingsPage implements OnInit, OnDestroy {
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
  RUS = false;
  LanguageSelect: string;
  geolocationEnabled: boolean = false; // This will be bound to the toggle
  latitude: number | null = null; // Initialize as null to show "Waiting for location data"
  longitude: number | null = null;
  sub1: Subscription;

  ngOnInit(): void {}

  listen() {
    this.sub1 = this.locationService.locationUpdates$.subscribe((location) => {
      console.log("Received location update:", location); // Debugging log
      this.latitude = location.latitude;
      this.longitude = location.longitude;
    });
  }

  ionViewWillLoad() {
    this.listen();

    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          this.ENG = true;
          this.FR = false;
          this.ES = false;
          this.RUS = false;
        }
        if (data === "ES") {
          this.ENG = false;
          this.ES = true;
          this.FR = false;
          this.RUS = false;
        }
        if (data === "FR") {
          this.ENG = false;
          this.FR = true;
          this.ES = false;
          this.RUS = false;
        }
        if (data === "RUS") {
          this.ENG = false;
          this.FR = false;
          this.ES = false;
          this.RUS = true;
        }
      } else {
        this.ENG = true;
        this.ES = false;
        this.FR = false;
        this.RUS = false;
        this.storage.set("Language", "ENG");
      }

      const lastLocation = this.locationService.getLastKnownLocation();
      if (lastLocation.latitude !== null && lastLocation.longitude !== null) {
        this.latitude = lastLocation.latitude;
        this.longitude = lastLocation.longitude;
      }
    });

    this.locationService.loadGeolocationStatus();
    this.geolocationEnabled = this.locationService.geolocationEnabled;
  }

  sendLocationViaWhatsApp() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
        if (data === "ES") {
          const message = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
        if (data === "FR") {
          const message = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
        if (data === "RUS") {
          const message = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
      } else {
        const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(
          `https://wa.me/?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }
    });
  }

  sendLocationViaSMS() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
        if (data === "ES") {
          const message = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
        if (data === "FR") {
          const message = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
        if (data === "RUS") {
          const message = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
      } else {
        const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
      }
    });
  }

  sendLocationViaMessenger() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
        if (data === "ES") {
          const message = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
        if (data === "FR") {
          const message = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
        if (data === "RUS") {
          const message = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
      } else {
        const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(
          `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
            message
          )}`,
          "_blank"
        );
      }
    });
  }

  onToggleGeolocation() {
    if (this.geolocationEnabled) {
      console.log("turning on service file");

      this.listen();
      this.locationService.onToggleGeolocation();
      this.locationService.enableGeolocationTracking();
    } else {
      console.log("return");
      this.sub1.unsubscribe();
      this.locationService.sub1.unsubscribe();
      return;
    }
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.locationService.sub1.unsubscribe();
  }

  sendLocationViaEmail() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const subject = "My Current Location";
          const body = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
        if (data === "ES") {
          const subject = "Mi ubicación actual";
          const body = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
        if (data === "FR") {
          const subject = "Ma position actuelle";
          const body = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
        if (data === "RUS") {
          const subject = "Мое текущее местоположение";
          const body = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
      } else {
        const subject = "My Current Location";
        const body = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(
          `mailto:?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          "_blank"
        );
      }
    });
  }

  onCancel() {
    console.log("OnCancelFired");
  }

  onChange() {
    if (this.LanguageSelect === "ENG") {
      this.ENG = true;
      this.FR = false;
      this.ES = false;
      this.RUS = false;
      this.storage.set("Language", "ENG");
    }
    if (this.LanguageSelect === "ES") {
      this.ENG = false;
      this.ES = true;
      this.FR = false;
      this.RUS = false;
      this.storage.set("Language", "ES");
    }

    if (this.LanguageSelect === "FR") {
      this.ENG = false;
      this.ES = false;
      this.FR = true;
      this.RUS = false;
      this.storage.set("Language", "FR");
    }

    if (this.LanguageSelect === "RUS") {
      this.ENG = false;
      this.ES = false;
      this.FR = false;
      this.RUS = true;
      this.storage.set("Language", "RUS");
    }
  }
}
