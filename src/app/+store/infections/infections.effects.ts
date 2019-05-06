import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as InfectionsActions from './infections.action';

//rxjs
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

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
}

