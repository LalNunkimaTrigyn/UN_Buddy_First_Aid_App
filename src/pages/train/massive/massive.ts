import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TourniquetPage } from './tourniquet/tourniquet';
import { WoundpackingPage } from './woundpacking/woundpacking';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-massive',
  templateUrl: 'massive.html'
})
export class MassivePage {

  constructor(public storage:Storage, public navCtrl: NavController) {

  }

  ENG = false;
  FR = false;
  ES =false
  ionViewWillEnter(){
    this.storage.get('Language').then(data => 
      {
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

  GotoTourniquet(){
    this.navCtrl.push(TourniquetPage)
  }
  GotoWoundpacking(){
    this.navCtrl.push(WoundpackingPage)
  }
}
