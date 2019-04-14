import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // title = 'my-first-app';
  // name = 'Tanima '
  // oddNumbers : number[] = [];
  // evenNumbers : number[] = [];
  // serverElements = [{ type:'server', name:'TestServer', content:'test server content'} ];
  // numbers = [1,2,3,4,5]
  // oddNumber = [1,3,5]
  // evenNumber = [2,4,6]
  // onlyOdd = false
  // value = 100;

  // onServerAdded(serverData: {serverName: string, serverContent:string}) {
  //   this.serverElements.push({
  //     type:'server',
  //     name:serverData.serverName,
  //     content:serverData.serverContent
  //   })
  // }
  // onBlueprintAdded(blueprintData: {serverName: string, serverContent:string}) {
    
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name:blueprintData.serverName,
  //     content:blueprintData.serverContent
  //   })
  // }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed !'
  // }

  // onDestroyFirst() {
  //   this.serverElements.splice(0,1)
  // }

  // onGameStarted(gameData:number) {
  //   console.log(gameData)
  //   if(gameData % 2 === 0 ) {
  //     this.evenNumbers.push(gameData)
  //   } else  {
  //     this.oddNumbers.push(gameData)
  //   }

  // }
  
  // accounts : {name: string, status:string} [] = []
  // constructor(private accountService: AccountsService) {

  // }
  // ngOnInit() {
  //   this.accounts= this.accountService.accounts
  // }
  
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

}
