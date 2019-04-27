import { Injectable } from "@angular/core";
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects'
import { LocationsService } from 'src/app/services/locations.service';
import { Observable, from } from 'rxjs';
import * as LocationsActions from './location.actions';
import { switchMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import {Location} from '../../models/index';

@Injectable()
export class LocationsEffects {
    constructor(private actions$: Actions, private locationsService: LocationsService) {

    }

    @Effect()
    public getLocations$: Observable<Action> = this.actions$.pipe(
        ofType(LocationsActions.LocationActionsType.GET_LOCATIONS),
        switchMap(
            (action: LocationsActions.GetLocations) => {
                return this.locationsService.getLocations$().pipe(
                    map((response: Location[]) => {
                        return new LocationsActions.GetLocationsSuccess(response);
                    }),
                    catchError((error: any) => {
                        return of(new LocationsActions.GetLocationsError(error));
                    })
                )
            }
        )
    )
}