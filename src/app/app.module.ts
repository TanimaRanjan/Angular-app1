import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-hightlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component'

import { AccountsService }  from './accounts.service'
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, 
    ServersComponent, 
    WarningAlertComponent, 
    SuccessAlertComponent, 
    CockpitComponent, 
    ServerElementComponent, 
    GameControlComponent, 
    OddComponent, 
    EvenComponent, 
    BasicHighlightDirective, 
    BetterHighlightDirective, 
    UnlessDirective, 
    NewAccountComponent, 
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // ,
    // HttpModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
