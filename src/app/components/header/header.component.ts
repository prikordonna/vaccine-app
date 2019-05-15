import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MailService } from '../../services/mail.service';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../+store";
import {getMails} from "../../+store/mail";

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
        console.log(this.unreaded);
      }
    }));
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
