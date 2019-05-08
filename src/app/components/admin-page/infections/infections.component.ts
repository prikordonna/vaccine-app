import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { InfectionService } from '../../../services/infection.service';
import { Infection } from '../../../models/Infection';
import { Clinic } from 'src/app/models/Clinic';
import { ClinicService } from 'src/app/services/clinic.service';

import { Store, select } from '@ngrx/store';
import { AppState, InfectionsState, getInfectionsState, getInfectionToEdit, getInfectionData } from './../../../+store';
import * as InfectionsActions from '../../../+store/infections/infections.action';
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

  private sub: Subscription;

  infectionToEdit: Infection;


  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  clinics: Clinic[];
  unselectedClinics: Clinic[];
  selectedClinics = [];

  constructor(
    private modalService: BsModalService,
    private clinicService: ClinicService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.clinicService.getClinics$()
      .subscribe(
        (clinics) => {
          this.clinics = clinics;
        }
      )
    this.infections$ = this.store.pipe(select(getInfectionData));
    this.infectionToEdit$ = this.store.pipe(select(getInfectionToEdit));
    this.sub = this.infectionToEdit$.subscribe(
      (infection) => {
        if (infection) {
          this.infectionToEdit = infection;
        } else {
          this.infectionToEdit = null;
        }
      }
    )
    this.store.dispatch(new InfectionsActions.GetInfections());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template);
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
      let cliIndex = this.selectedClinics
        .findIndex(
          (el: Clinic) => {
            return el == clinic
          });
      this.selectedClinics.splice(cliIndex, 1);
      console.log(this.selectedClinics)
    } else {
      clinic.isSelected = !clinic.isSelected;
      this.selectedClinics.push(clinic)
      console.log(this.selectedClinics)
    }
  }

  sendClinics(infection) {
    this.selectedClinics.forEach(el => {
      infection.clinics.push(el);
    })
    this.store.dispatch(new InfectionsActions.UpdateInfection(infection))
    this.selectedClinics = [];
  }

  deleteClinicFromInfection(infection, clinic) {
    let cliIndex = infection.clinics.findIndex(el => el.clinic_name == clinic.clinic_name);
    infection.clinics.splice(cliIndex, 1);
    this.store.dispatch(new InfectionsActions.UpdateInfection(infection))
  }

}