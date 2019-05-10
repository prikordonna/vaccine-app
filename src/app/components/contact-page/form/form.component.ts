import { Component, OnInit, ViewChild } from '@angular/core';

import { Mail } from '../../../models/mail';
import { MailService } from '../../../services/mail.service';
import { ToastrsService } from '../../../services/toastrs.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('addMailForm') public addMailForm: NgForm;
  mail: Mail = {
    name: '',
    email: '',
    message: '',
    readed: false
  }

  constructor(private mailService: MailService, private notification: ToastrsService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.mail.name != '' && this.mail.email != ''
      && this.mail.message != '') {
      this.mailService.addMail(this.mail);

      this.mail.name = '';
      this.mail.email = '';
      this.mail.message = '';
      this.mail.readed = false
      
    }
    this.addMailForm.reset();
    this.notification.success();
  }  
}
