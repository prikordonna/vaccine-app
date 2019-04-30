import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { VaccineService } from '../../../services/vaccine.service';
import { Infection } from '../../../models/Infection';


@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent implements OnInit {
  infections: Infection[];
  editState: boolean = false;
  infectionToEdit: Infection;
  modalRef: BsModalRef;
  
  constructor(
    private infectionService: VaccineService,
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
