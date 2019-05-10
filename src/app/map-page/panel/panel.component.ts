import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { Clinic } from '../../models/Clinic';
import { Observable, from } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../+store/index';
import * as ClinicsActions from '../../+store/clinics/clinics.actions';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public clinics$: Observable<Clinic[]>;

  constructor(
    private mapsService: MapsService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.clinics$ = this.store.pipe(select('clinics'));

    this.store.dispatch(new ClinicsActions.GetClinics());
  }

  openWindow(clinic: Clinic, index: number) {
    this.mapsService.openWindow.next(index);
    this.zoomToNewLocation(clinic.lat, clinic.lng);
  }

  zoomToNewLocation(lat: number, lng: number) {
    this.mapsService.lat = lat;
    this.mapsService.lng = lng;

    this.mapsService.newCoordinators.next({
      lat: this.mapsService.lat,
      lng: this.mapsService.lng,
      zoom: 15
    });
  }
}