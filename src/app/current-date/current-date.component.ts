import { Component } from '@angular/core';

@Component({
  selector: 'app-current-date',
  template: '<h3>{{month}}/{{day}}/{{year}}</h3>'
})
export class CurrentDateComponent {

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

}
