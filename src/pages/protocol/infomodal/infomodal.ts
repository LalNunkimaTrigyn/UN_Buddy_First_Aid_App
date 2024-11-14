import { Component } from '@angular/core';
import { NavParams, ModalController, NavController } from 'ionic-angular';
import { ENGProtocolData } from '../../../providers/ENGprotocoldata';
import { FRProtocolData } from '../../../providers/FRprotocoldata';
import { Storage } from '@ionic/storage';
import { ESProtocolData } from '../../../providers/ESProtocolData';

@Component({
  selector: 'page-infomodal',
  templateUrl: 'infomodal.html'
})
export class InfoModalPage {

  constructor(public storage:Storage, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public ENGdataService: ENGProtocolData, 
    public FRdataService: FRProtocolData, 
    public ESProtocolData: ESProtocolData, 
    public navCtrl: NavController) {

  }

  Step = 0;
  Information = [];
  InformationPager = false;
  InformationPage = false;
  Image1 = false;
  Image2 = false;
  ImageURL = '';
  ENG = false;
  FR = false; 
  ES = false; 

  ionViewWillEnter(){
    this.Step = this.navParams.get('Step');
    this.InformationPage = this.navParams.get('InformationPage')
    this.storage.get('Language').then(data => 
      {
        if(data === 'ENG'){
          this.ENG = true;
          this.FR = false;
          this.ES = false;
          if (this.InformationPage !== true){
            this.GetInfo(); 
            if (this.Information[0]["Image1"] === true){
              this.Image1 = true;
            }
            if (this.Information[0]["Image2"] === true){
              this.Image2 = true;
            }
          }

        }
        if(data === 'FR'){
          this.ENG = false;
          this.FR = true;
          this.ES = false;
          if (this.InformationPage !== true){
            this.GetInfo(); 
            if (this.Information[0]["Image1"] === true){
              this.Image1 = true;
            }
            if (this.Information[0]["Image2"] === true){
              this.Image2 = true;
            }
          }
        }
        if(data === 'ES'){
          this.ENG = false;
          this.FR = false;
          this.ES = true;
          
          if (this.InformationPage !== true){
            this.GetInfo(); 
            if (this.Information[0]["Image1"] === true){
              this.Image1 = true;
            }
            if (this.Information[0]["Image2"] === true){
              this.Image2 = true;
            }
          }
        }
      }
    )
  }

  GetInfo(){
    if (this.ENG === true){
      this.Information = this.ENGdataService.FirstAidProtocol[this.Step].Information;
      this.InformationPager = this.ENGdataService.FirstAidProtocol[this.Step].InformationPager;
      this.Image1 = this.ENGdataService.FirstAidProtocol[this.Step].Image1;
      this.ImageURL = this.ENGdataService.FirstAidProtocol[this.Step].ImageURL;
    }
    if (this.FR === true){
      this.Information = this.FRdataService.FirstAidProtocol[this.Step].Information;
      this.InformationPager = this.FRdataService.FirstAidProtocol[this.Step].InformationPager;
      this.Image1 = this.FRdataService.FirstAidProtocol[this.Step].Image1;
      this.ImageURL = this.FRdataService.FirstAidProtocol[this.Step].ImageURL;
    }
    if (this.ES === true){
      this.Information = this.ESProtocolData.FirstAidProtocol[this.Step].Information;
      this.InformationPager = this.ESProtocolData.FirstAidProtocol[this.Step].InformationPager;
      this.Image1 = this.ESProtocolData.FirstAidProtocol[this.Step].Image1;
      this.ImageURL = this.ESProtocolData.FirstAidProtocol[this.Step].ImageURL;
    }
  }

  ModalDismiss(){
    this.navCtrl.pop();
  }

}
