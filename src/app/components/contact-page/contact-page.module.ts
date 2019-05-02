import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactPageComponent } from './contact-page.component';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
      FormsModule,
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