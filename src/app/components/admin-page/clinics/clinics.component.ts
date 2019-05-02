import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClinicService } from '../../../services/clinic.service';
import { Clinic } from '../../../models/Clinic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  clinics: Clinic[];
  editState: boolean = false;
  clinicToEdit: Clinic;
  modalRef: BsModalRef;

  constructor(
    private clinicService: ClinicService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.clinicService.getClinics$().subscribe(clinics =>
      this.clinics = clinics
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteClinic(clinic) {
    this.cancelEditing();
    this.clinicService.deleteClinic(clinic);

  }
  editClinic(clinic) {
    this.editState = true;
    this.clinicToEdit = clinic;

  }
  updateClinic(clinic) {
    this.clinicService.updateClinic(clinic);
    this.cancelEditing();
  }
  cancelEditing() {
    this.editState = false;
    this.clinicToEdit = null;
  }
}
