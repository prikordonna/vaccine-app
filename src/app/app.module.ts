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

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { VaccinesComponent } from './components/admin-page/vaccines/vaccines.component';

import { VaccineService } from './services/vaccine.service';
import { AddInfectionComponent } from './components/admin-page/add-infection/add-infection.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

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
    PanelComponent,
    VaccinesComponent,
    AddInfectionComponent,

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3a71eakX1ji_aFPmQpGf5gWD278RRl4o'
    }),
  ],
  providers: [
    LocationsService, 
    VaccineService,
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
