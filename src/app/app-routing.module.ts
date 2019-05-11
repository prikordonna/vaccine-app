import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
    path: "settings", component: AdminPageComponent, data: {animation: 'Settings'}
  },
  {
    path: "profile", component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
