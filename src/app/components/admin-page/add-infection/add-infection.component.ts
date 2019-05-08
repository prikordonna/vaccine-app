import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { InfectionService } from '../../../services/infection.service';
import { Infection } from '../../../models/Infection';
import { ClinicService } from '../../../services/clinic.service';
import { map } from 'rxjs/operators';
import { Clinic } from 'src/app/models';

import { Store, select } from '@ngrx/store';
import { AppState, InfectionsState } from './../../../+store';
import * as InfectionsActions from '../../../+store/infections/infections.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-infection',
  templateUrl: './add-infection.component.html',
  styleUrls: ['./add-infection.component.scss']
})

export class AddInfectionComponent implements OnInit {
  infection: Infection = {
    name: '',
    result: '',
    simptoms: '',
    day1: false,
    day3: false,
    month2: false,
    month4: false,
    month6: false,
    month12: false,
    month18: false,
    year6: false,
    year14: false,
    year16: false,
    adult: false,
    clinics: [],
  }
  clinicList = [];
  selectedClinics = [];

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  constructor(private infectionService: InfectionService,
    private modalService: BsModalService,
    private clinicService: ClinicService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.clinicService.getClinics$()
      .pipe(
        map(clinic => {
          clinic['isSelected'] = false;
          return clinic
        })
      )
      .subscribe(
        (clinics) => {
          this.clinicList = clinics;
        }
      )
  }

  selectClinic(clinic) {
    if (clinic.isSelected) {
      clinic.isSelected = !clinic.isSelected;
      let cliIndex = this.selectedClinics.findIndex((el: Clinic) => el == clinic);
      this.selectedClinics.splice(cliIndex, 1);
      console.log(this.selectedClinics)
    } else {
      clinic.isSelected = !clinic.isSelected;
      this.selectedClinics.push(clinic)
      console.log(this.selectedClinics)
    }
  }

  clearSelected() {
    this.clinicList.forEach(el => {
      el.isSelected = false;
    })
    this.selectedClinics= [];
    console.log(this.selectedClinics)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  onSubmit(infection) {
    if (this.infection.name != '' && this.infection.result != '' && this.infection.simptoms != '') {
      this.infection.clinics = this.selectedClinics;
      this.store.dispatch(new InfectionsActions.AddInfection(this.infection));
      this.infection.name = '';
      this.infection.result = '';
      this.infection.ways = '';
      this.infection.simptoms = '';
      this.infection.day1 = false;
      this.infection.day3 = false;
      this.infection.month2 = false;
      this.infection.month4 = false;
      this.infection.month6 = false;
      this.infection.month12 = false;
      this.infection.month18 = false;
      this.infection.year6 = false;
      this.infection.year14 = false;
      this.infection.year16 = false;
      this.infection.adult = false;
      this.clearSelected();
    }
  }

}
