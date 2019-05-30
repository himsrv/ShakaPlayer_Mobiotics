import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShakaPlayerComponent } from './shaka-player/shaka-player.component';

const appRoutes: Routes = [
  {
    path:'shaka-player',component:ShakaPlayerComponent
  },
  {
    path:'',component:AppComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})
export class AppRoutingModule{

}
