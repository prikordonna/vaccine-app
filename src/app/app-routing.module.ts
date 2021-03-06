import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCardComponent } from './user-profile/user-card/user-card.component';

const routs: Routes = [
  {
    path: '', component: MainPageComponent, data: {animation: 'Home'}
  },
  {
    path: 'info', component: InfoPageComponent, data: {animation: 'Info'}
  },
  {
    path: 'map', component: MapPageComponent, data: {animation: 'Map'}
  },
  {
    path: 'contact', component: ContactPageComponent, data: {animation: 'Contact'}
  },
  {
    path: "settings", 
    component: AdminPageComponent,
    // children: [
    //   {
    //     path: "",
    //     redirectTo: "infections",
    //     pathMatch: "full"
    //   },
    //   {
    //     path: "mails",
    //     component: MailsComponent
    //   },
    //   {
    //     path: "clinics",
    //     component: ClinicsComponent
    //   },
    //   {
    //     path: "infections",
    //     component: InfectionsComponent
    //   }
    // ], 
    data: {animation: 'Settings'}
  },
  {
    path: "profile", component: UserProfileComponent
  },
  {
    path: "card/:uid", component: UserCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
