import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as InfectionsActions from './infections.action';

//rxjs
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, pluck, concatMap } from 'rxjs/operators';

import { InfectionService } from '../../services/infection.service';
import { Infection } from 'src/app/models/Infection';

@Injectable()
export class InfectionsEffects {
    constructor(
        private actions$: Actions,
        private infectionService: InfectionService,
    ) {
        console.log('[INFECTIONS EFFECTS]')
    }

    @Effect()
    getInfections$: Observable<Action> = this.actions$
        .pipe(
            ofType<InfectionsActions.GetInfections>(InfectionsActions.InfectionsActionsType.GET_INFECTIONS),
            switchMap(
                (action: InfectionsActions.GetInfections) => {
                    return this.infectionService.getInfection()
                        .pipe(
                            map(
                                (response: Infection[]) => {
                                    return new InfectionsActions.GetInfectionsSuccess(response);
                                }),
                            catchError(
                                (error: Error) => {
                                    return of(new InfectionsActions.GetInfectionsError(error));
                                }
                            )
                        )
                })
        )

    @Effect()
    updateInfection$: Observable<Action> = this.actions$
        .pipe(
            ofType<InfectionsActions.UpdateInfection>(InfectionsActions.InfectionsActionsType.UPDATE_INFECTION),
            pluck('payload'),
            concatMap((payload) => {
                return this.infectionService
                    .updateInfection(payload)
                    .pipe(
                        map(
                            (response: Infection) => {
                                return of(new InfectionsActions.UpdateInfectionSuccess(response));
                            }
                        ),
                        catchError(
                            (error: any) => {
                                return of(new InfectionsActions.UpdateInfectionError(error));
                            }
                        )
                    )
            })
        )

    @Effect()
    addInfection$: Observable<Action> = this.actions$
        .pipe(
            ofType<InfectionsActions.AddInfection>(InfectionsActions.InfectionsActionsType.ADD_INFECTION),
            pluck('payload'),
            concatMap((payload: Infection) => {
                return this.infectionService
                    .addInfection(payload)
                    .pipe(
                        map(
                            (response: Infection) => {
                                return of(new InfectionsActions.AddInfectionSuccess(response));
                            }
                        ),
                        catchError(
                            (error: any) => {
                                return of(new InfectionsActions.AddInfectionError(error));
                            }
                        )
                    )
            })
        )

        @Effect()
        delInfection$: Observable<Action> = this.actions$
            .pipe(
                ofType<InfectionsActions.DelInfection>(InfectionsActions.InfectionsActionsType.DEL_INFECTION),
                pluck('payload'),
                concatMap((payload: Infection) => {
                    return this.infectionService
                        .deleteInfection(payload)
                        .pipe(
                            map(
                                (response: Infection) => {
                                    return of(new InfectionsActions.DelInfectionSuccess(payload));
                                }
                            ),
                            catchError(
                                (error: any) => {
                                    return of(new InfectionsActions.DelInfectionError(error));
                                }
                            )
                        )
                })
            )
}

