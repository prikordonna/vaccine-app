import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MailService } from '../services/mail.service';
import { map } from 'rxjs/operators';
import { Mail } from 'src/app/models/mail';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  unreadedMails = [];
  constructor(
    public auth: AuthService,
    public mailService: MailService,
  ) { }


  ngOnInit() {
    this.mailService.getMails$()
      .pipe(
        map(
          (el) => {
            el.forEach(
              (mail) => {
                if(!mail.readed) {
                  console.log(mail);
                  this.unreadedMails.push(mail);
                }
              }
            )
          }
        )
      )
  }



}
