import { Component, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { MapsService } from '../../../services/maps.service';
import { LocationsService } from '../../../services/locations.service';
import { Marker } from '../../../models/marker';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public locations: Marker[];
  public locationList: Marker[];

  constructor(
    private mapsService: MapsService,
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.locations = this.locationsService.getMarkers();
    this.locationList = this.locations;
  }

  openWindow(location: Marker, index: number) {
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