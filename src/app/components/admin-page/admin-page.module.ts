import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { AdminPageComponent } from './admin-page.component';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { AddInfectionComponent } from './add-infection/add-infection.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { InfectionsComponent } from './infections/infections.component';
import { MailsComponent } from './mails/mails.component';

//bootstrap
import { TabsModule } from 'ngx-bootstrap';
import { CollapseModule } from '../info-page/collapse/collapse.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InfectionsReducer } from '../../+store/infections/infections.reducer';
import { InfectionsEffects } from '../../+store/infections/infections.effects';
import { clinicsReducer } from 'src/app/+store/clinics/clinics.reducer';
import { ClinicsEffects } from 'src/app/+store/clinics/clinics.effects';
import { mailReducer } from 'src/app/+store/mail/mail.reducer';
import { MailEffects } from 'src/app/+store/mail/mail.effects';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FormsModule,
    CollapseModule,
    BrowserAnimationsModule,
    StoreModule.forFeature('infections', InfectionsReducer),
    EffectsModule.forFeature([InfectionsEffects]),
    StoreModule.forFeature('clinics', clinicsReducer),
    EffectsModule.forFeature([ClinicsEffects]),
    StoreModule.forFeature('mails', mailReducer),
    EffectsModule.forFeature([MailEffects]),
  ],
  exports: [
    AdminPageComponent,
    AddClinicComponent,
    AddInfectionComponent,
    ClinicsComponent,
    InfectionsComponent,
    MailsComponent,
  ],
  declarations: [
    AdminPageComponent,
    AddClinicComponent,
    AddInfectionComponent,
    ClinicsComponent,
    InfectionsComponent,
    MailsComponent,
  ]
})
export class AdminPageModule { }
