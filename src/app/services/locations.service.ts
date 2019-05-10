import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, share } from 'rxjs/operators/';

@Injectable()
export class LocationsService {

  // markers: Marker[] = [
  //   {
  //     id: 0,
  //     lat: 49.815353,
  //     lng: 24.047695,
  //     title: 'A',
  //     icon: '/assets/images/vaccine.png',
  //     draggable: false,
  //     clinic_name: 'Західноукраїнський спеціалізований дитячий медичний центр',
  //     address: 'вул. Дністерcька, 27, Львів, Львівська обл., 79000',
  //     phone: '0322 702 207',
  //     website: 'http://www.zusdmc.lviv.ua/',
  //     vaccines: 'Гепатит В, Туберкольоз, Кашлюк'
  //   },
  //   {
  //     id: 1,
  //     lat: 49.833641,
  //     lng: 24.005774,
  //     title: 'B',
  //     icon: '/assets/images/vaccine.png',
  //     draggable: false,
  //     clinic_name: 'Медичний центр Medicover',
  //     address: 'вул. Антоновича, 102, Львів, Львівська обл., 79000',
  //     phone: '0800 305 911',
  //     website: 'https://medicover.ua/uk',
  //     vaccines: 'Туберкольоз, Кір, Краснуха'
  //   },
  //   {
  //     id:2,
  //     lat: 49.790133,
  //     lng: 24.058170,
  //     title: 'C',
  //     icon: '/assets/images/vaccine.png',
  //     draggable: false,
  //     clinic_name: 'Дитяча поліклініка "Веселка"',
  //     address: 'пр. Червоної Калини, 68, Львів, Львівська обл., 79000',
  //     phone: '0322 532 911',
  //     website: 'https://veselka.clinic/',
  //     vaccines: 'Дифтирія, Правець'
  //   }
  // ];

  // constructor() { }

  // getMarkers() {
  //   return this.markers;
  // }

  // addMarker(marker: Marker) {
  //   this.markers.push(marker);
  // }

  // deleteMarker(index) {
  //   this.markers.splice(index, 1)
  // }

  // updateMarker(marker: Marker) {

  // }
  markersCollection: AngularFirestoreCollection<Location>;
  markers: Observable<Location[]>;
  markerDoc: AngularFirestoreDocument<Location>;
  
  constructor(private smth: AngularFirestore) {
    this.markersCollection = smth.collection<Location>('locations', ref => ref.orderBy('title', 'asc'));
    this.markers = this.markersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Location;
        data.id = a.payload.doc.id;
        return data;
      })})
    )
  }

  getLocations$(): Observable<Location[]> {
    //  return this.markers;
    return this.markersCollection.snapshotChanges()
      .pipe(
        map((changes) => changes.map((a) => {
          const data = a.payload.doc.data() as Location;
          data.id = a.payload.doc.id;
          return data;
        }))
      )
   }
   addMarker(marker: Location) {
    this.markersCollection.add(marker);
    console.log(`Element was added`);
   }

   deleteMarker(marker: Location) {
    this.markerDoc = this.smth.doc(`locations/${marker.id}`);
    console.log(`Element with id(${marker.id}) was deleted`);
    this.markerDoc.delete();
   }
   updateMarker(marker: Location) {
    this.markerDoc = this.smth.doc(`locations/${marker.id}`);
    console.log(`Element with id(${marker.id}) was edited`);
    this.markerDoc.update(marker);
   }

}