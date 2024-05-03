import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { 
  }
 

  ngOnInit(): void {
    $(document).ready(function () {
      $("#up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 350);
      });
    });

    eval(`
      AOS.init({
          offset: 320,
          once: true
      })`);
   
  }

}
