import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { routerConfig } from './routes/top-menu.config';
import { HomeComponent } from './top-menu/home.component';
import { PhotosComponent } from './top-menu/photos.component';
import { DestinationComponent } from './components/destination/destination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routerConfig, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
