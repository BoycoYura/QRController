import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NumberScanComponent } from '../number-scan/number-scan';
/**
 * Generated class for the QrScanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qr-scan',
  templateUrl: 'qr-scan.html'
})
export class QrScanComponent {

  text: string;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    console.log('Hello QrScanComponent Component');
    this.text = 'Hello World';
  }
  
  toNumberPage(){
  	this.navCtrl.push(NumberScanComponent);
  }

  toQRPage(){
  	this.navCtrl.push(QrScanComponent);
  }
}
