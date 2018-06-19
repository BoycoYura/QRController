import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QrScanComponent } from '../qr-scan/qr-scan';
/**
 * Generated class for the NumberScanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-scan',
  templateUrl: 'number-scan.html'
})
export class NumberScanComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello NumberScanComponent Component');
    this.text = 'Hello World';
  }

  toNumberPage(){
  	this.navCtrl.push(NumberScanComponent);
  }

  toQRPage(){
  	this.navCtrl.push(QrScanComponent);
  }

}
