import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { InfoPageComponent } from './info-page.component';

//ngx-bootstrap
import { CollapseModule } from './collapse/collapse.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InfectionsReducer } from '../../+store/infections/infections.reducer';
import { InfectionsEffects } from '../../+store/infections/infections.effects';


@NgModule({
   imports: [
      CommonModule,
      CollapseModule,
      BrowserAnimationsModule,
      StoreModule.forFeature('infections', InfectionsReducer),
      EffectsModule.forFeature([InfectionsEffects]),
   ],
   exports: [
      InfoPageComponent
   ],
   declarations: [
      InfoPageComponent,
   ]
})
export class InfoPageModule { }
