import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { AdminPageComponent } from './admin-page.component';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { AddInfectionComponent } from './add-infection/add-infection.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { InfectionsComponent } from './infections/infections.component';

//bootstrap
import { TabsModule } from 'ngx-bootstrap';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InfectionsReducer } from '../../+store/infections/infections.reducer';
import { InfectionsEffects } from '../../+store/infections/infections.effects';
import { clinicReducer } from 'src/app/+store/clinic/clinic.reducer';
import { ClinicsEffects } from 'src/app/+store/clinic/clinic.effects';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FormsModule,
    StoreModule.forFeature('infections', InfectionsReducer),
    EffectsModule.forFeature([InfectionsEffects]),
    StoreModule.forFeature('clinics', clinicReducer),
    EffectsModule.forFeature([ClinicsEffects]),
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
