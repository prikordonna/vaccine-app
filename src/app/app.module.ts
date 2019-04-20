import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { MapComponent } from './components/map-page/map/map.component';
import { PanelComponent } from './components/map-page/panel/panel.component';

import { MapsService } from './maps.service';
import { LocationsService } from './locations.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactPageComponent,
    InfoPageComponent,
    MainPageComponent,
    MapPageComponent,
    MapComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3a71eakX1ji_aFPmQpGf5gWD278RRl4o'}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocationsService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
