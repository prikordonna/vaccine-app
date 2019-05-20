import { Component, OnInit, TemplateRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, InfectionsState, getInfectionsState, getClinicData } from '../../+store';
import * as InfectionsActions from '../../+store/infections/infections.action';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Clinic } from 'src/app/models';
import { Infection } from '../../models/Infection';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-infection',
  templateUrl: './add-infection.component.html',
  styleUrls: ['./add-infection.component.scss']
})

export class AddInfectionComponent implements OnInit {
  public user: User;
  infectionState$: Observable<InfectionsState>;
  clinics$: Observable<Clinic[]>;

  public clinicDataSub: Subscription;

  public rand = Math.floor(Math.random() * 7);

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
    img: this.rand,
    clinics: [],
  }

  clinicList = [];
  selectedClinics = [];

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true,
    keyboard: false
  };

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((el) => {
      if (el) {
        this.user = el;
      }
    })
    this.clinics$ = this.store.pipe(select(getClinicData));
    this.infectionState$ = this.store.pipe(select(getInfectionsState));

    this.clinicDataSub = this.clinics$
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  selectClinic(clinic) {
    if (clinic.isSelected) {
      clinic.isSelected = !clinic.isSelected;
      let cliIndex = this.selectedClinics.findIndex((el: Clinic) => el == clinic);
      this.selectedClinics.splice(cliIndex, 1);
    } else {
      clinic.isSelected = !clinic.isSelected;
      this.selectedClinics.push(clinic)
    }
  }

  clearSelected() {
    this.clinicList.forEach(el => {
      el.isSelected = false;
    })
    this.selectedClinics = [];
  }

  onSubmit() {
    this.infection.clinics = this.selectedClinics;
    this.store.dispatch(new InfectionsActions.AddInfection(this.infection));
    this.clearSelected();
    this.clearInfection();
  }

  clearInfection() {
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
  }

}
