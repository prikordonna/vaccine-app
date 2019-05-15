import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MailService } from '../../services/mail.service';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../+store";
import { getMails } from "../../+store/mail";
import * as MailActions from '../../+store/mail/mail.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  unreaded = [];

  constructor(
    public auth: AuthService,
    private mail: MailService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.store.pipe(select(getMails)).subscribe((data => {
      if (data && data.length) {
        this.unreaded = this.mail.getNotReadedMail();
      }
    }));
    this.store.dispatch(new MailActions.GetMails());
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
