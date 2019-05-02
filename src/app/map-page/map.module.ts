import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent } from './map/map.component';
import {MapPageComponent} from './map-page.component'
import {PanelComponent} from './panel/panel.component';
import { StoreModule } from '@ngrx/store';
import { clinicReducer, ClinicsEffects } from '../+store';
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
    StoreModule.forFeature('locations', clinicReducer),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3a71eakX1ji_aFPmQpGf5gWD278RRl4o'
    }),
    EffectsModule.forFeature([ClinicsEffects]),
  ],
  exports: [
    MapPageComponent,

  ]  
})
export class MapModule { }
