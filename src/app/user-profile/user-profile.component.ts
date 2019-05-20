import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../+store';
import * as InfectionsActions from '../+store/infections/infections.action';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

import { Infection } from '../models/Infection';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  public user;
  infections: Infection[];


  constructor(
    public auth: AuthService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((el) => {
      if (el) {
        this.user = el;
      }
    })
    this.store.pipe(select(getInfectionData)).subscribe(el => {
      this.infections = el;
    });;
    this.store.dispatch(new InfectionsActions.GetInfections());
  }
  createCard() {
    if (!this.user.card) {
      this.user.card = [];
      this.infections.forEach((infection) => {
        let data: Object = {
          name: infection.name,
          id: infection.id,
        };
        if (infection.day1) {
          data = { ...data, day1: false };
        }
        if (infection.day3) {
          data = { ...data, day3: false };
        }
        if (infection.month2) {
          data = { ...data, month2: false };
        }
        if (infection.month4) {
          data = { ...data, month4: false };
        }
        if (infection.month6) {
          data = { ...data, month6: false };
        }
        if (infection.month12) {
          data = { ...data, month12: false };
        }
        if (infection.month18) {
          data = { ...data, month18: false };
        }
        if (infection.year6) {
          data = { ...data, year6: false };
        }
        if (infection.year14) {
          data = { ...data, year14: false };
        }
        if (infection.year16) {
          data = { ...data, year16: false };
        }
        if (infection.adult) {
          data = { ...data, adult: false };
        }
        this.user.card.push(data);
      })
      this.auth.createUserCard(this.user);
    }
  }
}
