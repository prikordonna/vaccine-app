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
    ) {   }

    @Effect()
    getInfections$: Observable<Action> = this.actions$
        .pipe(
            ofType<InfectionsActions.GetInfections>(InfectionsActions.InfectionsActionsType.GET_INFECTIONS),
            switchMap(
                (action: InfectionsActions.GetInfections) => {
                    return this.infectionService.getInfections()
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
    getInfection$: Observable<Action> = this.actions$
        .pipe(
            ofType<InfectionsActions.GetInfection>(InfectionsActions.InfectionsActionsType.GET_INFECTION),
            pluck('payload'),
            switchMap(
                (payload) => {
                    return this.infectionService.getInfection(payload)
                        .pipe(
                            map(
                                (response: Infection) => {
                                    response.id = payload['id'];
                                    return new InfectionsActions.GetInfectionSuccess(response);
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
            concatMap((payload: Infection) => {
                console.log(payload)
                return this.infectionService
                    .updateInfection(payload)
                    .then(() => {
                        return new InfectionsActions.UpdateInfectionSuccess(payload);
                    })
                    .catch((error) => {
                        return new InfectionsActions.UpdateInfectionError(error);
                    })
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
                    .then(() => {
                        return new InfectionsActions.AddInfectionSuccess(payload);
                    })
                    .catch((error) => {
                        return new InfectionsActions.AddInfectionError(error);
                    })
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
                    .then(() => {
                        return new InfectionsActions.DelInfectionSuccess(payload);
                    })
                    .catch((error) => {
                        return new InfectionsActions.DelInfectionError(error);
                    })
            })
        )
}

