import { InfectionsState, initialInfectionsState } from './infections.state';
import { InfectionsActionsType, InfectionsActions } from './infections.action';
import { Infection } from '../../models/Infection';

export function InfectionsReducer(
    state: InfectionsState = initialInfectionsState,
    action: InfectionsActions
): InfectionsState {
    switch (action.type) {
        case InfectionsActionsType.GET_INFECTIONS:
            {
                console.log('get infections action');
                return {
                    ...state
                }
            }
        case InfectionsActionsType.GET_INFECTIONS_SUCCESS:
            {
                console.log('get infections success');
                const data = [...(<Infection[]>action.payload)];
                return {
                    ...state,
                    data,
                };
            }
        case InfectionsActionsType.GET_INFECTIONS_ERROR:
            {
                console.log('get infections success');
                const error = action.payload;
                return {
                    ...state,
                    error,
                };
            }
        default: {
            console.log('unknown task');
            return state;
        }
    }
}
