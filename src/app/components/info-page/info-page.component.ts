import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../../services/vaccine.service';
import { Infection } from 'src/app/models/Infection';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
infections: Infection[];
  constructor(
    public vaccineService: VaccineService
  ) { }

  ngOnInit() {
    this.vaccineService.getInfection()
    .subscribe(
      (infections) => {
        this.infections = infections;
      }
    )
  }

}
