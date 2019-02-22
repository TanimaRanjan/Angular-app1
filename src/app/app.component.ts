import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-app';
  name = 'Tanima '

  oddNumbers : number[] = [];
  evenNumbers : number[] = [];

  serverElements = [
    {
      type:'server',
      name:'TestServer',
      content:'test server content'}
  ];

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
    
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent:string}) {
    
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed !'
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1)
  }

  onGameStarted(gameData:number) {
    console.log(gameData)
    if(gameData % 2 === 0 ) {
      this.evenNumbers.push(gameData)
    } else  {
      this.oddNumbers.push(gameData)
    }

  }
  
}
