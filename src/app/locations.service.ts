import { Injectable } from '@angular/core';
import { Marker } from '../../models';

@Injectable()
export class LocationsService {

  markers: Marker[] = [
    {
      lat: 49.815353,
      lng: 24.047695,
      title: 'A',
      icon: '/assets/images/vaccine.png',
      draggable: false,
      clinic_name: 'Західноукраїнський спеціалізований дитячий медичний центр',
      address: 'вул. Дністерcька, 27, Львів, Львівська обл., 79000',
      phone: '0322 702 207',
      website: 'http://www.zusdmc.lviv.ua/',
      vaccines: 'Гепатит В, Туберкольоз, Кашлюк'
    },
    {
      lat: 49.833641,
      lng: 24.005774,
      title: 'B',
      icon: '/assets/images/vaccine.png',
      draggable: false,
      clinic_name: 'Медичний центр Medicover',
      address: 'вул. Антоновича, 102, Львів, Львівська обл., 79000',
      phone: '0800 305 911',
      website: 'https://medicover.ua/uk',
      vaccines: 'Туберкольоз, Кір, Краснуха'
    },
    {
      lat: 49.790133,
      lng: 24.058170,
      title: 'C',
      icon: '/assets/images/vaccine.png',
      draggable: false,
      clinic_name: 'Дитяча поліклініка "Веселка"',
      address: 'пр. Червоної Калини, 68, Львів, Львівська обл., 79000',
      phone: '0322 532 911',
      website: 'https://veselka.clinic/',
      vaccines: 'Дифтирія, Правець'
    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }

}