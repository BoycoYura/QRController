import { Component } from '@angular/core';

/**
 * Generated class for the HistoryListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'history-list',
  templateUrl: 'history-list.html'
})
export class HistoryListComponent {

  text: string;

  constructor() {
    console.log('Hello HistoryListComponent Component');
    this.text = 'Hello World';
  }

}
