import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { Clinic } from '../../../models/Clinic';
import { ClinicService } from '../../../services/clinic.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.scss']
})
export class AddClinicComponent implements OnInit {

  clinic: Clinic = {
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

  constructor(private clinicService: ClinicService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.clinic.lat != undefined && this.clinic.lng != undefined
      && this.clinic.title != '' && this.clinic.clinic_name != '' && this.clinic.phone != ''
      && this.clinic.address != '' && this.clinic.website != '' && this.clinic.vaccines != '') {
      this.clinicService.addClinic(this.clinic);

      this.clinic.lat = undefined;
      this.clinic.lng = undefined;
      this.clinic.draggable = false;
      this.clinic.title = '';
      this.clinic.icon = '/assets/images/vaccine.png';
      this.clinic.clinic_name = '';
      this.clinic.phone = '';
      this.clinic.address = '';
      this.clinic.website = '';
      this.clinic.vaccines = '';
      
    }
  }  
}
