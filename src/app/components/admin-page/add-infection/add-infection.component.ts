import { Component, OnInit } from '@angular/core';
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
  constructor(private infectionService: VaccineService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    if(this.infection.name != '' && this.infection.result != '' && this.infection.simptoms != '') {
      this.infectionService.addInfection(this.infection);
      this.infection.name = '';
      this.infection.result = '';
      this.infection.simptoms = '';
    }
  }

}
