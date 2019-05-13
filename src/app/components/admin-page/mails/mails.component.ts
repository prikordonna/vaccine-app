import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ToastrsService } from '../../../services/toastrs.service';
import { Mail } from '../../../models/mail';

import { Store, select } from '@ngrx/store';
import { AppState } from './../../../+store';
import { MailsState } from './../../../+store/mail/mail.state';
import * as MailsActions from '../../../+store/mail/mail.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {
  mailState$: Observable<MailsState>;
  modalRef: BsModalRef | null;
  mails: Mail[];

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>,
    private notification: ToastrsService,
  ) { }

  ngOnInit() {
    this.mailState$ = this.store.pipe(select('mails'));
    this.store.dispatch(new MailsActions.GetMails());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteMail(mail) {
    this.store.dispatch(new MailsActions.DeleteMail(mail));
    this.notification.warning();
  }

  markAsRead(mail) {
    const doneMail = { ...mail, readed: true };
    this.store.dispatch(new MailsActions.CheckMail(doneMail));
  }

}

