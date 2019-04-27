import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../models/location';
import { Observable, from } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../+store/index';
import * as LocationsActions from '../../+store/location/location.actions';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public locations$: Observable<Location[]>;

  constructor(
    private mapsService: MapsService,
    private locationsService: LocationsService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.locationsService.getMarkers().subscribe(locations => 
    //   this.locations$ = locations
    //   )
    this.locations$ = this.store.pipe(select('locations'));

    this.store.dispatch(new LocationsActions.GetLocations());
  }

  openWindow(location: Location, index: number) {
    this.mapsService.openWindow.next(index);
    this.zoomToNewLocation(location.lat, location.lng);
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