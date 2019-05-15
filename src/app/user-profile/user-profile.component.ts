import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../+store';
import * as InfectionsActions from '../+store/infections/infections.action';

import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthService } from '../services/auth.service';

import { Infection } from '../models/Infection';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  public user;
  infections$: Observable<Infection[]>;

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  constructor(
    public auth: AuthService,
    private modalService: BsModalService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    // this.auth.user$.subscribe((el) => {
    //   if (el) {
    //     this.user = el;
    //     console.log(this.user)
    //   }
    // })
    // this.infections$ = this.store.pipe(select(getInfectionData));
    // this.store.dispatch(new InfectionsActions.GetInfections());
  }
  // addInfectionsToUser() {
  //   this.infections$.subscribe((el) => {
  //     this.user.card = el;
  //   })
  //   console.log(this.user.card)
  // }
  //   checkVaccineDate(infection, infectionDate) {
  //     this.user.card.forEach(el => {
  //       if(infection.id == el.id) {
  //         el[infectionDate] = 
  //       }
  //     })
  //     if (this.user.card[infection]) {
  //       this.user.card[infection][infectionDate] != this.user.card[infection][infectionDate];
  //       console.log(this.user.card);
  //     } else {
  //       this.user.card.push({ ...infection, infectionDate: true })
  //       console.log(this.user.card);
  //     }

  //   }

  //   openModal(template: TemplateRef<any>) {
  //     this.modalRef = this.modalService.show(template, this.config);
  //   }
  //   onSubmit() {
  //     this.auth.createUserCard(this.user);
  //   }

}
