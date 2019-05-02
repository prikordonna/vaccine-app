import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfoPageModule } from './components/info-page/info-page.module';
import { ContactPageModule } from './components/contact-page/contact-page.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { MainPageModule} from './components/main-page/main-page.module';

import { InfectionsComponent } from './components/admin-page/infections/infections.component';
import { ClinicsComponent } from './components/admin-page/clinics/clinics.component';

import { AddInfectionComponent } from './components/admin-page/add-infection/add-infection.component';
import { AddClinicComponent } from './components/admin-page/add-clinic/add-clinic.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

//FireStore
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

//Service
import { InfectionService } from './services/infection.service';
import { MapsService } from '../app/services/maps.service';
import { ClinicService } from './services/clinic.service';

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
    InfectionsComponent,
    AddInfectionComponent,
    AdminPageComponent,
    UserProfileComponent,
    AddClinicComponent,
    ClinicsComponent,
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
    MainPageModule,
    InfoPageModule,
    ContactPageModule,
  ],
  providers: [
    ClinicService,
    InfectionService,
    MapsService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
