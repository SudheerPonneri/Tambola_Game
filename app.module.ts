import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './user-name/user-name.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './player/player.component';
import { Player2Component} from './player2/player2.component';
import { Player3Component } from './player3/player3.component';
import { Player4Component } from './player4/player4.component';
import { Player5Component } from './player5/player5.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    AdminComponent,
    Player2Component,
    PlayerComponent,
    Player3Component,
    Player4Component,
    Player5Component,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    UserNameComponent,
    AdminComponent,
    PlayerComponent,
    Player2Component,
    Player3Component,
    Player4Component,
    Player5Component,
]
})
export class AppModule { }
