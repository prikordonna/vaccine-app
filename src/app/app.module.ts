import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//environment
import { environment } from '../environments/environment';

//page_modules
import { MainPageModule} from './components/main-page/main-page.module';
import { AdminPageModule } from './components/admin-page/admin-page.module';
import { InfoPageModule } from './components/info-page/info-page.module';
import { ContactPageModule } from './components/contact-page/contact-page.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

//FireStore
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

//Services
import { InfectionService } from './services/infection.service';
import { MapsService } from '../app/services/maps.service';
import { ClinicService } from './services/clinic.service';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

//ngrx
import { StoreModule } from '@ngrx/store';
import { appReducer } from './+store/index';
import { MapModule } from './map-page/map.module';
import { EffectsModule } from '@ngrx/effects';

//bootstrap
import { TabsModule, ModalModule, CollapseModule, BsDropdownModule, CarouselModule } from 'ngx-bootstrap';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
    CarouselModule.forRoot(),
    MainPageModule,
    InfoPageModule,
    ContactPageModule,
    AdminPageModule,
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
