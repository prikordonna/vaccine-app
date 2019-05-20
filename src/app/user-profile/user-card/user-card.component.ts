import { Component, OnInit, TemplateRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../../+store';
import * as InfectionsActions from '../../+store/infections/infections.action';

import { Infection } from 'src/app/models/Infection';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrsService } from 'src/app/services/toastrs.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  infections: Infection[];
  public user;

  constructor(
    private store: Store<AppState>,
    public auth: AuthService,
    public router: Router,
    private notification: ToastrsService,
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((el) => {
      if (el) {
        this.user = el;
      }
    })
    this.store.pipe(select(getInfectionData)).subscribe(el => {
      this.infections = el;
    });
    this.store.dispatch(new InfectionsActions.GetInfections());
  }

  updateCard() {
    this.auth.createUserCard(this.user);
    this.router.navigate(['/profile'])
    this.notification.edit();
  }

  cancelEdit() {
    this.router.navigate(['/profile'])
    this.notification.cancel();
  }
}
