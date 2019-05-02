import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { InfectionService } from '../../../services/infection.service';
import { Infection } from '../../../models/Infection';
import { ClinicService } from '../../../services/clinic.service';

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

  modalRef: BsModalRef;
  constructor(private infectionService: InfectionService,
    private modalService: BsModalService,
    private clinicService: ClinicService
    ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.infection.name != '' && this.infection.result != '' && this.infection.simptoms != '') {
      this.infectionService.addInfection(this.infection);
      this.infection.name = '';
      this.infection.result = '';
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

}
