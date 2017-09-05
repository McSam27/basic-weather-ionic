import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  // delcare class var
  city: string;
  state: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.city = 'Spencerport';
    this.state = 'NY';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
