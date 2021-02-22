import { Player2Component } from './player2/player2.component';
import { UserNameComponent } from './user-name/user-name.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path:"admin", component:AdminComponent },
    { path:"user-name", component:UserNameComponent },
    { path:"player", component:PlayerComponent },
    { path:"player2", component:Player2Component },
    { path:"player3", component:Player2Component },
    { path:"player4", component:Player2Component },
    { path:"player5", component:Player2Component }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

