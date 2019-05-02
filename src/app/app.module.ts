import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfoPageModule } from './components/info-page/info-page.module';
import { ContactPageModule } from './components/contact-page/contact-page.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { VaccinesComponent } from './components/admin-page/vaccines/vaccines.component';
import { LocationsComponent } from './components/admin-page/locations/locations.component';
import { AddInfectionComponent } from './components/admin-page/add-infection/add-infection.component';
import { AddLocationComponent } from './components/admin-page/add-location/add-location.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

//FireStore
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

//Service
import { VaccineService } from './services/vaccine.service';
import { MapsService } from '../app/services/maps.service';
import { LocationsService } from '../app/services/locations.service';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import { StoreModule } from '@ngrx/store';
import { appReducer } from './+store/index';
import { MapModule } from './map-page/map.module';
import { EffectsModule } from '@ngrx/effects';

import { TabsModule, ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    VaccinesComponent,
    AddInfectionComponent,
    AdminPageComponent,
    UserProfileComponent,
    AddLocationComponent,
    LocationsComponent,
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
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    StoreModule.forRoot({ app: appReducer }),
    MapModule,
    EffectsModule.forRoot([]),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    InfoPageModule,
    ContactPageModule,
  ],
  providers: [
    LocationsService,
    VaccineService,
    MapsService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
