import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { AdminPageComponent } from './admin-page.component';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { AddInfectionComponent } from './add-infection/add-infection.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { InfectionsComponent } from './infections/infections.component';

//bootstrap
import { TabsModule } from 'ngx-bootstrap';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FormsModule,
  ],
  exports: [
    AdminPageComponent,
    AddClinicComponent,
    AddInfectionComponent,
    ClinicsComponent,
    InfectionsComponent,
  ],
  declarations: [
    AdminPageComponent,
    AddClinicComponent,
    AddInfectionComponent,
    ClinicsComponent,
    InfectionsComponent,
  ]
})
export class AdminPageModule { }
