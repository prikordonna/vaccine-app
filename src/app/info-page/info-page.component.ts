import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

//ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getInfectionData } from '../+store';
import * as InfectionsActions from '../+store/infections/infections.action';

import { Infection } from 'src/app/models/Infection';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})

export class InfoPageComponent implements OnInit {
  // public rand =   Math.floor(Math.random() * 5);
  // caret: string = 'down';

  infections$: Observable<Infection[]>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.infections$ = this.store.pipe(select(getInfectionData));
    this.store.dispatch(new InfectionsActions.GetInfections());
  }
  // toggle() {
  //   this.caret = this.caret != 'up' ? 'up' : 'down';
  // }
}
