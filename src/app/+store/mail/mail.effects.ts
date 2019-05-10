import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { MailService } from 'src/app/services/mail.service';
import { Observable } from 'rxjs';
import * as MailActions from './mail.actions';
import { switchMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Mail } from '../../models/mail';

@Injectable()
export class MailEffects {
    constructor(
        private actions$: Actions, 
        private mailService: MailService
        ) {}

    @Effect()
    public getMails$: Observable<Action> = this.actions$
    .pipe(
        ofType(MailActions.MailActionsType.GET_MAILS),
        switchMap(
            (action: MailActions.GetMails) => {
                return this.mailService.getMails$().pipe(
                    map((response: Mail[]) => {
                        return new MailActions.GetMailsSuccess(response);
                    }),
                    catchError((error: any) => {
                        return of(new MailActions.GetMailsError(error));
                    })
                )
            }
        )
    )
}