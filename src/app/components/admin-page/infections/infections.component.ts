import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { InfectionService } from '../../../services/infection.service';
import { Infection } from '../../../models/Infection';


@Component({
  selector: 'app-infections',
  templateUrl: './infections.component.html',
  styleUrls: ['./infections.component.scss']
})
export class InfectionsComponent implements OnInit {
  infections: Infection[];
  editState: boolean = false;
  infectionToEdit: Infection;
  modalRef: BsModalRef;
  
  constructor(
    private infectionService: InfectionService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.infectionService.getInfection().subscribe(infections =>
    this.infections = infections
    );
    console.log('ngOninit ran!!!');
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteInfection(event, infection) {
    this.cancelEditing();
    this.infectionService.deleteInfection(infection);
  }
  
  editInfection(event, infection) {
    this.editState = true;
    this.infectionToEdit = infection;
  }
  
  updateInfection(infection) {
  this.infectionService.updateInfection(infection);
  this.cancelEditing();
  }

  cancelEditing() {
    this.editState = false;
    this.infectionToEdit = null;
  }
}
