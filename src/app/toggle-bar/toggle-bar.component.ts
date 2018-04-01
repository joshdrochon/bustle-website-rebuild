import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-toggle-bar',
  templateUrl: './toggle-bar.component.html',
  styleUrls: ['./toggle-bar.component.css']
})
export class ToggleBarComponent{

  constructor()
  {
    $(function(){
      $("#menu").click(function(){
          $("#initially-hidden").fadeIn();
      });
      $("#tg-menu").click(function(){
          $("#initially-hidden").fadeOut();
      });
    });
  }
}
