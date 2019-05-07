import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { MailService } from '../../../services/mail.service';
import { Mail } from '../../../models/mail';

import { Store, select } from '@ngrx/store';
import { AppState } from './../../../+store';
import { MailState } from './../../../+store/mail';
import * as MailsActions from '../../../+store/mail/mail.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
  mailState$: Observable<MailState>;
  mailToDelete: Mail;
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  mails: Mail[];
  unselectedMails: Mail[];
  selectedMails = [];

  constructor(
    private mailService: MailService,
    private modalService: BsModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.mailService.getMails$()
      .subscribe(
        (mails) => {
          this.mails = mails;
        }
      )
    this.mailState$ = this.store.pipe(select('mails'));
    this.store.dispatch(new MailsActions.GetMails());
  }

}

