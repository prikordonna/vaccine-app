import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { MailService } from '../../../services/mail.service';
import { ToastrsService } from '../../../services/toastrs.service';
import { Mail } from '../../../models/mail';

import { Store, select } from '@ngrx/store';
import { AppState } from './../../../+store';
import { MailState } from './../../../+store/mail/mail.state';
import * as MailsActions from '../../../+store/mail/mail.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {
  mailState$: Observable<MailState>;
  modalRef: BsModalRef | null;
  mails: Mail[];

  constructor(
    private mailService: MailService,
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
    this.mailService.deleteMail(mail);
    this.notification.warning();
  }

  markAsRead(mail) {
    this.mailService.changeMailState(mail);
  }

}

