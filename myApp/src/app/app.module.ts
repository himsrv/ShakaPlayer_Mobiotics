import { AppRoutingModule } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShakaPlayerComponent } from './shaka-player/shaka-player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TechVideosComponent } from './tech-videos/tech-videos.component';
import { OtherVideosComponent } from './other-videos/other-videos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShakaPlayerComponent,
    NavbarComponent,
    TechVideosComponent,
    OtherVideosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
