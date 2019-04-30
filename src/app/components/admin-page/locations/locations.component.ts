import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { LocationsService } from '../../../services/locations.service';
import { Location } from '../../../models/location';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  editState: boolean = false;
  locationToEdit: Location;
  modalRef: BsModalRef;

  constructor(
    private locationsService: LocationsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.locationsService.getLocations$().subscribe(locations =>
      this.locations = locations
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteLocation(location) {
    this.cancelEditing();
    this.locationsService.deleteMarker(location);

  }
  editLocation(location) {
    this.editState = true;
    this.locationToEdit = location;

  }
  updateLocation(location) {
    this.locationsService.updateMarker(location);
    this.cancelEditing();
  }
  cancelEditing() {
    this.editState = false;
    this.locationToEdit = null;
  }
}
