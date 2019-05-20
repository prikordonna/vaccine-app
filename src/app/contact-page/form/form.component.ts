import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../+store';
import * as MailsActions from '../../+store/mail/mail.actions';

import { Mail } from '../../models/mail';
import { ToastrsService } from '../../services/toastrs.service';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private notification: ToastrsService,
    private store: Store<AppState>,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.store.pipe(select('mails'));
    
  }

  onSubmit(): void {
    this.store.dispatch(new MailsActions.AddMail(this.mail));
    this.mail.name = '';
    this.mail.email = '';
    this.mail.message = '';
    this.mail.readed = false
    this.addMailForm.reset();
    this.notification.success();
  }
}
