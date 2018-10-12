import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { routerConfig } from './routes/top-menu.config';
import { HomeComponent } from './components/home.component';
import {DestinationsComponent} from './components/destinations.component';
import { PhotosComponent } from './components/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
