import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { InfoPageComponent } from './info-page.component';

//ngx-bootstrap
import { CollapseModule } from './collapse/collapse.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
      CommonModule,
      CollapseModule,
      BrowserAnimationsModule,
   ],
   exports: [
      InfoPageComponent
   ],
   declarations: [
      InfoPageComponent,
   ]
})
export class InfoPageModule { }
