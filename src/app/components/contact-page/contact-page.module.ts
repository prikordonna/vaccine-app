import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactPageComponent } from './contact-page.component';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
    ],
    exports: [
      ContactPageComponent,
      FormComponent,
    ],
    declarations: [
      ContactPageComponent,
      FormComponent,
    ]
  })
  export class ContactPageModule{ }