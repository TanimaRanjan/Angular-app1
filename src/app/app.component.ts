import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-app';
  name = 'Tanima '

 
  serverElements = [
    {
      type:'server',
      name:'TestServer',
      content:'test server content'}
  ];

}
