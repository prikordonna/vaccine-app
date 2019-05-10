import { Component, OnInit } from '@angular/core';
import { Clinic } from '../../models/';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ClinicService } from '../../services/clinic.service';
import { MapsService } from '../../services/maps.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number;

  public openedWindow: number;

  public markers: Clinic[];

  constructor(
    private ClinicService: ClinicService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService
  ) { }

  ngOnInit() {

    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;

    // this.locationsService.getMarkers().subscribe(locations => 
    //   this.locations = locations
    //   )
    this.ClinicService.getClinics$().subscribe(markers =>
        this.markers = markers
      );

    // Zoom to new location after search
    this.mapsService.newCoordinators.subscribe(
      (coords: { lat: number, lng: number, zoom: number }) => {
        if (coords) {
          this.lat = coords.lat;
          this.lng = coords.lng;
          this.zoom = coords.zoom;
          this.mapApiLoader.load();
        }
      }
    );

    // Open window after click on panel
    this.mapsService.openWindow.subscribe(
      index => {
        this.openedWindow = +index;
      }
    );
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
    this.openedWindow = index;
  }

  isInfoWindowOpen(index: number) {
    return this.openedWindow === index;
  }
}