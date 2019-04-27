import { Component, OnInit } from '@angular/core';
import { Location } from '../../../models/location';
import { LocationsService } from '../../../services/locations.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  location: Location = {
    lat: undefined,
    lng: undefined,
    id: undefined,
    draggable: false,
    title: '',
    icon: '/assets/images/vaccine.png',
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
    if (this.location.lat != undefined && this.location.lng != undefined && this.location.id != undefined
      && this.location.title != '' && this.location.clinic_name != '' && this.location.phone != ''
      && this.location.address != '' && this.location.website != '' && this.location.vaccines != '') {
      this.locationService.addMarker(this.location);

      this.location.lat = undefined;
      this.location.lng = undefined;
      this.location.id = undefined;
      this.location.draggable = false;
      this.location.title = '';
      this.location.icon = '/assets/images/vaccine.png';
      this.location.clinic_name = '';
      this.location.phone = '';
      this.location.address = '';
      this.location.website = '';
      this.location.vaccines = '';
      
    }
    console.log(this.location);
  }
  
}
