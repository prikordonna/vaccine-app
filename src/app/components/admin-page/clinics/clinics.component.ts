import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClinicService } from '../../../services/clinic.service';

//ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getClinicData, getClinicToEdit } from './../../../+store';
import * as ClinicsActions from '../../../+store/clinics/clinics.actions';

import { Clinic } from '../../../models/Clinic';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  clinics$: Observable<Clinic[]>;
  clinicToEdit$: Observable<Clinic>;
  modalRef: BsModalRef;

  clinicToEdit: Clinic;

  private clinicToEditSub: Subscription;

  constructor(
    private clinicService: ClinicService,
    private modalService: BsModalService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.clinics$ = this.store.pipe(select(getClinicData));
    this.clinicToEdit$ = this.store.pipe(select(getClinicToEdit));

    this.clinicToEditSub = this.clinicToEdit$
      .subscribe(
        (clinic) => {
          if (clinic) {
            this.clinicToEdit = clinic;
          } else {
            this.clinicToEdit = null;
          }
        }
      )
    this.store.dispatch(new ClinicsActions.GetClinics());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteClinic(clinic) {
    this.store.dispatch(new ClinicsActions.DelClinic(clinic));
  }
  
  editClinic(clinic) {
    this.store.dispatch(new ClinicsActions.GetClinic(clinic));

  }
  updateClinic(clinic) {
    this.store.dispatch(new ClinicsActions.UpdateClinic(clinic));
  }
}
