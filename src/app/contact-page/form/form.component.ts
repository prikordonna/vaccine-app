import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../+store';
import * as MailsActions from '../../+store/mail/mail.actions';

import { Mail } from '../../models/mail';
import { ToastrsService } from '../../services/toastrs.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  @ViewChild('addMailForm') public addMailForm: NgForm;
  private userSubscription: Subscription; 

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
    this.userSubscription = this.auth.user$.subscribe(user => {
      this.mail.name = user.displayName;
      this.mail.email = user.email;
    })
  }

  ngOnDestroy() {
    if(this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
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
