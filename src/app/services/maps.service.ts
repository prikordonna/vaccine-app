import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MapsService {

  public lat: number = 49.839680;
  public lng: number = 24.029720;
  public zoom: number = 12;

  public newCoordinators = new Subject();

  public openWindow = new Subject();

  constructor() { }
}