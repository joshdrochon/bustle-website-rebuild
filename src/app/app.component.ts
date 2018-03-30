import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor()
    {
      $(document).ready(function(){
          $("#test-btn").click(function(){
              alert('Hello there!');
          });
      });

    var bootstrap_enabled = (typeof $().modal == 'function');
    console.log(bootstrap_enabled);

    }

}
