import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Infection } from '../models/Infection';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators/';


@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  infectionsCollection: AngularFirestoreCollection<Infection>;
  infections: Observable<Infection[]>;
  infectionDoc: AngularFirestoreDocument<Infection>;
  constructor(private smth: AngularFirestore) {
    this.infectionsCollection = smth.collection<Infection>('infections', ref => ref.orderBy('name', 'asc'));
    // this.infections = this.infectionsCollection.valueChanges();
    this.infections = this.infectionsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Infection;
        data.id = a.payload.doc.id;
        return data;
      })})
    )}
   getInfection() {
     return this.infections;
   }
   addInfection(infection: Infection) {
    this.infectionsCollection.add(infection);
    console.log(`Element was added`);
   }

   deleteInfection(infection: Infection) {
    this.infectionDoc = this.smth.doc(`infections/${infection.id}`);
    console.log(`Element with id(${infection.id}) was deleted`);
    this.infectionDoc.delete();
   }
   updateInfection(infection: Infection) {
    this.infectionDoc = this.smth.doc(`infections/${infection.id}`);
    console.log(`Element with id(${infection.id}) was edited`);
    this.infectionDoc.update(infection);
   }
}
