import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public storage:Storage, public navCtrl: NavController) {

  }

  ENG = false;
  FR = false;
  ES = false;
  ionViewWillEnter(){
    this.storage.get('Language').then(data => 
      {
        console.log(data,'Language alert');
        if(data === 'ENG'){
          this.ENG = true;
          this.FR = false;
          this.ES = false;
        }
        if(data === 'FR'){
          this.ENG = false;
          this.FR = true;
          this.ES = false;
        }
        if(data === 'ES'){
          this.ENG = false;
          this.FR = false;
          this.ES = true;
        }
      }
    )
  }

  GoBack(){
    this.navCtrl.pop();
  }
}
