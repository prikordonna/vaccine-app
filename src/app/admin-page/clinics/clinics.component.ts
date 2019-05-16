import { Component, OnInit, TemplateRef } from '@angular/core';

//ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getClinicData, getClinicToEdit, getInfectionData } from '../../+store';
import * as ClinicsActions from '../../+store/clinics/clinics.actions';
import * as InfectionsActions from '../../+store/infections/infections.action';
import { Observable, Subscription } from 'rxjs';

//modal
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Clinic } from '../../models/Clinic';
import { Infection } from 'src/app/models/Infection';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  clinics$: Observable<Clinic[]>;
  clinicToEdit$: Observable<Clinic>;
  infections$: Observable<Infection[]>;

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  clinicToEdit: Clinic;
  infections: Infection[];

  private clinicToEditSub: Subscription;
  private infectionsDataSub: Subscription;

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.clinics$ = this.store.pipe(select(getClinicData));
    this.clinicToEdit$ = this.store.pipe(select(getClinicToEdit));
    this.infections$ = this.store.pipe(select(getInfectionData));

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

    this.infectionsDataSub = this.infections$
      .subscribe(
        (infections) => {
          this.infections = infections;
        }
      )
    this.store.dispatch(new ClinicsActions.GetClinics());
  }

  ngOnDestroy() {
    this.clinicToEditSub.unsubscribe();
    this.infectionsDataSub.unsubscribe();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  deleteClinic(clinic) {
    this.store.dispatch(new ClinicsActions.DelClinic(clinic));
    this.deleteClinicFromInfection(clinic);
  }

  deleteClinicFromInfection(clinic) {
    this.store.dispatch(new InfectionsActions.GetInfections());
    this.infections.forEach(infection => {
      let index = infection.clinics.findIndex(el => el.id == clinic.id);
      if(index == -1) {
        return
      } else {
        infection.clinics.splice(index, 1);
        this.store.dispatch(new InfectionsActions.UpdateInfection(infection));
      }
    })
  }

  editClinic(clinic) {
    this.store.dispatch(new ClinicsActions.GetClinic(clinic));
  }

  updateClinic(clinic) {
    this.store.dispatch(new ClinicsActions.UpdateClinic(clinic));
  }
}
