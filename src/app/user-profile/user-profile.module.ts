import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollapseModule } from '../directives/collapse/collapse.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfectionsReducer, InfectionsEffects } from '../+store';
import { AppRoutingModule } from '../app-routing.module'

//components
import { UserProfileComponent } from './user-profile.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
   imports: [
      CommonModule,
      AppRoutingModule,
      FormsModule,
      CollapseModule,
      BrowserAnimationsModule,
      StoreModule.forFeature('infections', InfectionsReducer),
      EffectsModule.forFeature([InfectionsEffects]),
   ],
   exports: [
      UserProfileComponent,
      UserCardComponent,
   ],
   declarations: [
      UserProfileComponent,
      UserCardComponent,
   ]
})
export class UserProfileModule { }
