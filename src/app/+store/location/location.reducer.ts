import { LocationState, initialLocationState } from './location.state';
import { LocationActionsType, LocationsActions } from './location.actions';
import { Location } from '../../models';

export function locationReducer(state: LocationState = initialLocationState, action: LocationsActions) {
    switch (action.type) {
        case LocationActionsType.GET_LOCATIONS:
            {
                return {
                    ...state
                }
            }
        case LocationActionsType.GET_LOCATIONS_SUCCESS:
            {
                const data = [...(<Location[]>action.payload)];
                return {
                    ...state, data
                };
            }
        default: {
            return state;
        }
    }
}
