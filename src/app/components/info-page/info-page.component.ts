import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, InfectionsState } from './../../+store';
import * as InfectionsActions from '../../+store/infections/infections.action';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  infectionsState$: Observable<InfectionsState>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    console.log('we have the store', this.store);
    this.infectionsState$ = this.store.pipe(select('infections'));
    this.store.dispatch(new InfectionsActions.GetInfections());
  }
}
