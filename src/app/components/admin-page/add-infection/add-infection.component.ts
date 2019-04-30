import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { VaccineService } from '../../../services/vaccine.service';
import { Infection } from '../../../models/Infection';

@Component({
  selector: 'app-add-infection',
  templateUrl: './add-infection.component.html',
  styleUrls: ['./add-infection.component.css']
})

export class AddInfectionComponent implements OnInit {
  infection: Infection = {
    name: '',
    result: '',
    simptoms: ''
  }
  modalRef: BsModalRef;
  constructor(private infectionService: VaccineService, 
              private modalService: BsModalService) { }

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
    }
  }

}
