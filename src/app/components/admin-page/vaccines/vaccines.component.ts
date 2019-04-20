import { Component, OnInit } from '@angular/core';
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

  constructor(private infectionService: VaccineService ) { }

  ngOnInit() {
    console.log('ngOninit ran!!!');
    this.infectionService.getInfection().subscribe(infections => 
      //console.log(infections)
      this.infections = infections
    );
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
