import { Component, OnInit, Input } from '@angular/core';
import { InfectionService } from '../../services/infection.service';
import { Infection } from 'src/app/models/Infection';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
infections: Infection[];
  constructor(
    public infectionService: InfectionService
  ) { }

  ngOnInit() {
    this.infectionService.getInfection()
    .pipe(
      map(infection => {
        infection['isCollapsed'] = false;
        return infection
      })
    )
    .subscribe(
      (infections) => {
        this.infections = infections;
      }
    )
  }


}
