import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `<app-server></app-server>
            //  <app-server></app-server>`,
    templateUrl: './servers.component.html',

  // styleUrls: ['./servers.component.css']
  styles: [`
    .white-text {
      color:white;
    }  
  ` ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No Server was created!'
  serverName= 'TestServer'
  userName = ''
  serverCreated=false
  servers =['TestServer', 'TestServer 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer= true
    }, 2000)

  
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated=true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName 
  }

  onUpdateServerName(event: Event) {
    //console.log(event.target.value)
    this.serverName = (<HTMLInputElement>event.target).value
  }
  onUpdateUserName() {
    this.userName = ''
  }

  logDisplay = []
   displayP = false;
  onDisplayDetails() {
    this.displayP=!this.displayP
    this.logDisplay.push(new Date())
  }
  getDisplayDetails() {
    return this.displayP;
  }
  getColor() {
    return this.logDisplay.length > 5 ? 'blue' : 'none'
  }
}

/*
<button class="btn btn-primary" (click)="onDisplayDetails()">Display details</button>
<p *ngIf="showContent">Specific contents</p>
<ul *ngIf="clicks">
    <li *ngFor="let click of clicks; let i = index">
        <p 
            [ngStyle]="{ backgroundColor: i >= 4 ? 'blue' : 'transparent' }"
            [ngClass]="{ light: i >= 4 }">{‌{ click }}</p>
    </li>
</ul>

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  showContent = false;
  clicks = [];

  constructor() { }

  onDisplayDetails() {
    this.showContent = !this.showContent;
    this.clicks.push(new Date());
  }
}

*/