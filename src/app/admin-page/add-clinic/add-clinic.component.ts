import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { Clinic } from '../../models/Clinic';
import { ClinicService } from '../../services/clinic.service';
import { Observable } from 'rxjs';

//ngrx
import { ClinicsState, AppState } from 'src/app/+store';
import * as ClinicsActions from '../../+store/clinics/clinics.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.scss']
})
export class AddClinicComponent implements OnInit {
  clinicsState$: Observable<ClinicsState>;

  clinic: Clinic = {
    lat: undefined,
    lng: undefined,
    draggable: false,
    title: '',
    icon: '/assets/images/marker.png',
    clinic_name: '',
    phone: '',
    address: '',
    website: '',
    vaccines: ''
  }

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  constructor(
    private clinicService: ClinicService,
    private modalService: BsModalService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  onSubmit() {
    this.store.dispatch(new ClinicsActions.AddClinic(this.clinic));
    this.clearClinic();
  }

  clearClinic() {
    this.clinic.lat = undefined;
    this.clinic.lng = undefined;
    this.clinic.draggable = false;
    this.clinic.title = '';
    this.clinic.clinic_name = '';
    this.clinic.phone = '';
    this.clinic.address = '';
    this.clinic.website = '';
    this.clinic.vaccines = '';
  }
}
