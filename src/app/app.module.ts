import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
// import { HttpModule } from '@angular/http';

//  import { AppComponent } from './app.component';
//  import { ServerComponent } from './server/server.component';
//  import { ServersComponent } from './servers/servers.component';
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
import { LoggingService } from './logging.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  { path: '' , component:  HomeComponent } ,
  { path: 'users' , component:  UsersComponent } ,
  { path: 'servers' , component:  ServersComponent } 
]

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
    AccountComponent, 
    EditServerComponent, 
    UserComponent,
    HomeComponent, 
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
    // ,
    // HttpModule
  ],
  providers: [AccountsService, LoggingService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
