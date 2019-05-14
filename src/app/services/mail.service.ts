import { Injectable } from '@angular/core';
import { Mail } from '../models/mail';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  mailsCollection: AngularFirestoreCollection<Mail>;
  mails: Observable<Mail[]>;
  mailDoc: AngularFirestoreDocument<Mail>;
  notReaded = [];

  constructor(private store: AngularFirestore) {
    this.mailsCollection = store.collection<Mail>('mails', ref => ref.orderBy('readed'));
    this.mails = this.mailsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Mail;
        data.id = a.payload.doc.id;
        return data;
      })
    })
    )
  }

  getMails$() {
    return this.mailsCollection.snapshotChanges()
      .pipe(
        map((changes) => changes.map((a) => {
          const data = a.payload.doc.data() as Mail;
          data.id = a.payload.doc.id;
          if(!data.readed && !this.notReaded.includes(data.id)) {
            this.notReaded.push(data.id);
          }
          return data;
        }))
      )
  }

  addMail(mail: Mail) {
    return this.mailsCollection.add(mail);
  }

  deleteMail(mail: Mail) {
    this.mailDoc = this.store.doc(`mails/${mail.id}`);
    if (this.notReaded.includes(mail.id)) {
      this.notReaded = this.notReaded.filter( item => item != mail.id);
    }
    return this.mailDoc.delete();
  }

  changeMailState(mail: Mail) {
    this.mailDoc = this.store.doc(`mails/${mail.id}`);
    if (this.notReaded.includes(mail.id)) {
      this.notReaded = this.notReaded.filter( item => item != mail.id);
    }
    return this.mailDoc.update({ readed: true });
  }

  getNotReadedMail() {
    return this.notReaded;
  }
}