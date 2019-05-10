import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ClinicService } from 'src/app/services/clinic.service';
import { Observable } from 'rxjs';
import * as ClinicsActions from './clinics.actions';
import { switchMap, map, catchError, pluck, concatMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Clinic } from '../../models/index';

@Injectable()
export class ClinicsEffects {
    constructor(
        private actions$: Actions,
        private clinicService: ClinicService
    ) { }

    @Effect()
    public getClinics$: Observable<Action> = this.actions$
        .pipe(
            ofType<ClinicsActions.GetClinics>(ClinicsActions.ClinicsActionsType.GET_CLINICS),
            switchMap(
                (action: ClinicsActions.GetClinics) => {
                    return this.clinicService.getClinics$()
                        .pipe(
                            map(
                                (response: Clinic[]) => {
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

    @Effect()
    getClinic$: Observable<Action> = this.actions$
        .pipe(
            ofType<ClinicsActions.GetClinic>(ClinicsActions.ClinicsActionsType.GET_CLINIC),
            pluck('payload'),
            switchMap(
                (payload) => {
                    return this.clinicService.getClinic(payload)
                        .pipe(
                            map(
                                (response: Clinic) => {
                                    response.id = payload['id'];
                                    return new ClinicsActions.GetClinicSuccess(response);
                                }),
                            catchError(
                                (error: Error) => {
                                    return of(new ClinicsActions.GetClinicError(error));
                                }
                            )
                        )
                })
        )

    @Effect()
    addClinic$: Observable<Action> = this.actions$
        .pipe(
            ofType<ClinicsActions.AddClinic>(ClinicsActions.ClinicsActionsType.ADD_CLINIC),
            pluck('payload'),
            concatMap((payload: Clinic) => {
                return this.clinicService
                    .addClinic(payload)
                    .then(() => {
                        return new ClinicsActions.AddClinicSuccess(payload);
                    })
                    .catch((error) => {
                        return new ClinicsActions.AddClinicError(error);
                    })
            })
        )

    @Effect()
    delClinic$: Observable<Action> = this.actions$
        .pipe(
            ofType<ClinicsActions.DelClinic>(ClinicsActions.ClinicsActionsType.DEL_CLINIC),
            pluck('payload'),
            concatMap((payload: Clinic) => {
                return this.clinicService
                    .deleteClinic(payload)
                    .then(() => {
                        return new ClinicsActions.DelClinicSuccess(payload);
                    })
                    .catch((error) => {
                        return new ClinicsActions.DelClinicError(error);
                    })
            })
        )

    @Effect()
    updateClinic$: Observable<Action> = this.actions$
        .pipe(
            ofType<ClinicsActions.UpdateClinic>(ClinicsActions.ClinicsActionsType.UPDATE_CLINIC),
            pluck('payload'),
            concatMap((payload: Clinic) => {
                return this.clinicService
                    .updateClinic(payload)
                    .then(() => {
                        return new ClinicsActions.UpdateClinicSuccess(payload);
                    })
                    .catch((error) => {
                        return new ClinicsActions.UpdateClinicError(error);
                    })
            })
        )
}