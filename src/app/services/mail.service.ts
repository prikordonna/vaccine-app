import { Injectable } from '@angular/core';
import { Mail } from '../models/mail';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class MailService {
    mailsCollection: AngularFirestoreCollection<Mail>;
    mails: Observable<Mail[]>;
    mailDoc: AngularFirestoreDocument<Mail>;
  
  constructor(private store: AngularFirestore) {
    this.mailsCollection = store.collection<Mail>('mails');
    this.mails = this.mailsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Mail;
        data.id = a.payload.doc.id;
        return data;
      })})
    )
  }

  getMails$(): Observable<Mail[]> {
    return this.mailsCollection.snapshotChanges()
      .pipe(
        map((changes) => changes.map((a) => {
          const data = a.payload.doc.data() as Mail;
          data.id = a.payload.doc.id;
          return data;
        }))
      )
   }

   addMail(mail: Mail) {
    this.mailsCollection.add(mail);
   }

   deleteMail(mail: Mail) {
    this.mailDoc = this.store.doc(`mails/${mail.id}`);
    this.mailDoc.delete();
   }
  
   changeMailState(mail: Mail) {
    this.mailDoc = this.store.doc(`mails/${mail.id}`);
    this.mailDoc.update({ readed: true });
   }
}