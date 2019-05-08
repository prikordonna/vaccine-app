import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Infection } from '../models/Infection';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';


@Injectable({
  providedIn: 'root'
})
export class InfectionService {
  infectionsCollection: AngularFirestoreCollection<Infection>;
  infections: Observable<Infection[]>;
  infectionDoc: AngularFirestoreDocument<Infection>;
  constructor(private db: AngularFirestore) {
    this.infectionsCollection = db.collection<Infection>('infections', ref => ref.orderBy('name', 'asc'));
    this.infections = this.infectionsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Infection;
        data.id = a.payload.doc.id;
        return data;
      })
    })
    )
  }
  getInfections() {
    return this.infectionsCollection.snapshotChanges()
      .pipe(
        map(changes => changes.map(a => {
          const data = a.payload.doc.data() as Infection;
          const id = a.payload.doc.id;
          return { id, ...data };
        })))
  }

  getInfection(infection) {
    return this.db.doc(`infections/${infection.id}`).valueChanges();
  }

  addInfection(infection: Infection) {
    return this.infectionsCollection.add(infection)
  }

  deleteInfection(infection: Infection) {
    this.infectionDoc = this.db.doc(`infections/${infection.id}`);
    return this.infectionDoc.delete();
  }
  updateInfection(infection): Promise<void> {
    this.infectionDoc = this.db.doc(`infections/${infection.id}`);
    return this.infectionDoc.update(infection);
  }
}
