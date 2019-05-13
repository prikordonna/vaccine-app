import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { MailService } from 'src/app/services/mail.service';
import { Observable } from 'rxjs';
import * as MailActions from './mail.actions';
import { switchMap, map, catchError, pluck, concatMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Mail } from '../../models/mail';

@Injectable()
export class MailEffects {
    constructor(
        private actions$: Actions,
        private mailService: MailService
    ) { }

    @Effect()
    public getMails$: Observable<Action> = this.actions$
        .pipe(
            ofType(MailActions.MailsActionsType.GET_MAILS),
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

    @Effect()
    public addMail$: Observable<Action> = this.actions$
        .pipe(
            ofType<MailActions.AddMail>(MailActions.MailsActionsType.ADD_MAIL),
            pluck('payload'),
            concatMap(
                (payload: Mail) => {
                    return this.mailService
                        .addMail(payload)
                        .then(() => {
                            return new MailActions.AddMailSuccess(payload);
                        })
                        .catch((error) => {
                            return new MailActions.AddMailError(error);
                        })
                })
        )

    @Effect()
    public delMail$: Observable<Action> = this.actions$
        .pipe(
            ofType<MailActions.DeleteMail>(MailActions.MailsActionsType.DELETE_MAIL),
            pluck('payload'),
            concatMap(
                (payload: Mail) => {
                    return this.mailService
                        .deleteMail(payload)
                        .then(() => {
                            return new MailActions.DeleteMailSuccess(payload);
                        })
                        .catch(
                            (error) => {
                                return new MailActions.DeleteMailError(error);
                            })
                }
            )
        )

    @Effect()
    public checkMail$: Observable<Action> = this.actions$
        .pipe(
            ofType<MailActions.CheckMail>(MailActions.MailsActionsType.CHECK_MAIL),
            pluck('payload'),
            concatMap(
                (payload: Mail) => {
                    return this.mailService
                        .changeMailState(payload)
                        .then(() => {
                            return new MailActions.CheckMailSuccess(payload);
                        })
                        .catch(
                            (error) => {
                                return new MailActions.CheckMailError(error);
                            })
                }
            )
        )
}