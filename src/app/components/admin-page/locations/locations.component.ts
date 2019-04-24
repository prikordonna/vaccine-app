import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../../services/locations.service';
import { Marker } from '../../../models/marker';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public locations: Marker[];

  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.locations = this.locationsService.getMarkers();
  }
}
