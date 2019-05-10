import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ClinicService } from 'src/app/services/clinic.service';
import { Observable } from 'rxjs';
import * as ClinicsActions from './clinic.actions';
import { switchMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Clinic } from '../../models/index';

@Injectable()
export class ClinicsEffects {
    constructor(
        private actions$: Actions, 
        private clinicService: ClinicService
        ) {  }

    @Effect()
    public getClinics$: Observable<Action> = this.actions$.pipe(
        ofType(ClinicsActions.ClinicActionsType.GET_CLINICS),
        switchMap(
            (action: ClinicsActions.GetClinics) => {
                return this.clinicService.getClinics$().pipe(
                    map((response: Clinic[]) => {
                        console.log(response)
                        return new ClinicsActions.GetClinicsSuccess(response);
                    }),
                    catchError((error: any) => {
                        return of(new ClinicsActions.GetClinicsError(error));
                    })
                )
            }
        )
    )
}