import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { Infection } from '../../../models/Infection';
import { Clinic } from 'src/app/models/Clinic';

import { Store, select } from '@ngrx/store';
import { AppState, getClinicData, getInfectionToEdit, getInfectionData } from './../../../+store';
import * as InfectionsActions from '../../../+store/infections/infections.action';
import * as ClinicActions from '../../../+store/clinics/clinics.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-infections',
  templateUrl: './infections.component.html',
  styleUrls: ['./infections.component.scss']
})

export class InfectionsComponent implements OnInit {
  infections$: Observable<Infection[]>;
  infectionsError$: Observable<string | any>;
  infectionToEdit$: Observable<Infection>;
  clinics: Clinic[];

  clinics$: Observable<Clinic[]>;

  private infectionToEditSub: Subscription;
  private clinicDataSub: Subscription;

  infectionToEdit: Infection;


  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  unselectedClinics: Clinic[];
  selectedClinics = [];

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.clinics$ = this.store.pipe(select(getClinicData));
    this.infections$ = this.store.pipe(select(getInfectionData));
    this.infectionToEdit$ = this.store.pipe(select(getInfectionToEdit));

    this.infectionToEditSub = this.infectionToEdit$.subscribe(
      (infection) => {
        if (infection) {
          this.infectionToEdit = infection;
          this.filterClinics(this.infectionToEdit);
        } else {
          this.infectionToEdit = null;
        }
      }
    )
    this.clinicDataSub = this.clinics$
    .subscribe(
      (clinic) => {
        this.clinics = clinic;
      }
      )
    this.store.dispatch(new InfectionsActions.GetInfections());
    this.store.dispatch(new ClinicActions.GetClinics());
  }

  ngOnDestroy() {
    this.infectionToEditSub.unsubscribe();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, this.config);
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  deleteInfection(event, infection) {
    this.store.dispatch(new InfectionsActions.DelInfection(infection));
  }

  editInfection(event, infection) {
    this.store.dispatch(new InfectionsActions.GetInfection(infection));
  }

  updateInfection(infection) {
    this.store.dispatch(new InfectionsActions.UpdateInfection(infection))
  }

  filterClinics(infection: Infection) {
    this.unselectedClinics = this.clinics;
    // console.log(this.unselectedClinics);
    console.log(this.clinics);
    if (infection.clinics.length > 0) {
      for (let selectedClinic of infection.clinics) {
        for (let i = 0; i < this.unselectedClinics.length; i++) {
          if (selectedClinic.clinic_name == this.unselectedClinics[i].clinic_name) {
            this.unselectedClinics.splice(i, 1);
          }
        }
      }
    }
  }

  selectClinic(clinic) {
    if (clinic.isSelected) {
      clinic.isSelected = !clinic.isSelected;
      this.selectedClinics
      .filter(
        (el) => {
          clinic != el;
        })
    } else {
      clinic.isSelected = !clinic.isSelected;
      this.selectedClinics.push(clinic)
    }
  }

  sendClinics(infection) {
    this.selectedClinics.forEach(el => {
      infection.clinics.push(el);
    })
    this.updateInfection(infection);
    this.selectedClinics = [];
    this.filterClinics(infection)
  }

  deleteClinicFromInfection(infection, clinic) {
    let cliIndex = infection.clinics.findIndex(el => el.clinic_name == clinic.clinic_name);
    infection.clinics.splice(cliIndex, 1);
    this.store.dispatch(new InfectionsActions.UpdateInfection(infection));
    this.filterClinics(infection);
  }
}