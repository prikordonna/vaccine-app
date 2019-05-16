import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../../+store';
import * as InfectionsActions from '../../+store/infections/infections.action';

import { Infection } from 'src/app/models/Infection';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  infections$: Observable<Infection[]>;

  constructor(
    private store: Store<AppState>,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.infections$ = this.store.pipe(select(getInfectionData));
    this.store.dispatch(new InfectionsActions.GetInfections());
  }
}
