import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapPageComponent } from './map-page.component'
import { PanelComponent } from './panel/panel.component';
import { StoreModule } from '@ngrx/store';
import { clinicsReducer, ClinicsEffects } from '../+store';
import { AgmCoreModule } from '@agm/core';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    MapComponent,
    MapPageComponent,
    PanelComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('clinics', clinicsReducer),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqsHdhcMve4rullhtpYL4a5TtVb9Y8TrY'
    }),
    EffectsModule.forFeature([ClinicsEffects]),
  ],
  exports: [
    MapPageComponent,

  ]  
})
export class MapModule { }
