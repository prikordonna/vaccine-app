import { Component, OnInit } from '@angular/core';
import { Marker } from '../../../models/marker';
import { LocationsService } from '../../../services/locations.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  location: Marker = {
    lat: undefined,
    lng: undefined,
    id: undefined,
    draggable: false,
    title: '',
    icon: '',
    clinic_name: '',
    phone: '',
    address: '',
    website: '',
    vaccines: ''
  }

  constructor(private locationService: LocationsService) { }

  ngOnInit() {
  }

  onSubmit() {   
      this.locationService.addMarker(this.location);
  }
}
