import { Component, OnInit, Input } from '@angular/core';
import { InfectionService } from '../../services/infection.service';
import { Infection } from 'src/app/models/Infection';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
infections: Infection[];
  constructor(
    public vaccineService: InfectionService
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
