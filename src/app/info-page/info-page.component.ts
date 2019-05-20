import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

//ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../+store';
import * as InfectionsActions from '../+store/infections/infections.action';

import { Infection } from 'src/app/models/Infection';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})

export class InfoPageComponent implements OnInit {
  public user;
  infections$: Observable<Infection[]>;
  constructor(
    private store: Store<AppState>,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((el) => {
      if (el) {
        this.user = el;
      }
    })
    this.infections$ = this.store.pipe(select(getInfectionData));
    this.store.dispatch(new InfectionsActions.GetInfections());
  }
  checkVaccineStatus(infection, infectionDate) {
    if (this.user && this.user.card) {
      const userInfection = this.user.card.find(el => el.id == infection.id);
      if (userInfection) {
        if (userInfection[infectionDate]) {
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
