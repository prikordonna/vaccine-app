import { Component, OnInit, TemplateRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../../+store';
import * as InfectionsActions from '../../+store/infections/infections.action';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Infection } from 'src/app/models/Infection';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  infections: Infection[];
  public user;

  modalRef: BsModalRef | null;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  constructor(
    private store: Store<AppState>,
    public auth: AuthService,
    private modalService: BsModalService,
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


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  createCard() {
    this.user.card = [];
    this.infections.forEach((infection) => {
      let data: Object = {
        name: infection.name,
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

  checkInfection(infection, date) {
    let data = this.user.card.find(el => el.name == infection.name);
    data[date] = true;
    this.auth.createUserCard(this.user);
  }
}
