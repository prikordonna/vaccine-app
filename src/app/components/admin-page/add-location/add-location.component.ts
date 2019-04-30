import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
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
    draggable: false,
    title: '',
    icon: '/assets/images/vaccine.png',
    clinic_name: '',
    phone: '',
    address: '',
    website: '',
    vaccines: ''
  }

  modalRef: BsModalRef;

  constructor(private locationService: LocationsService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.location.lat != undefined && this.location.lng != undefined
      && this.location.title != '' && this.location.clinic_name != '' && this.location.phone != ''
      && this.location.address != '' && this.location.website != '' && this.location.vaccines != '') {
      this.locationService.addMarker(this.location);

      this.location.lat = undefined;
      this.location.lng = undefined;
      this.location.draggable = false;
      this.location.title = '';
      this.location.icon = '/assets/images/vaccine.png';
      this.location.clinic_name = '';
      this.location.phone = '';
      this.location.address = '';
      this.location.website = '';
      this.location.vaccines = '';
      
    }
  }  
}
