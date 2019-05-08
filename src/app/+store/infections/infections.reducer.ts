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
        case InfectionsActionsType.GET_INFECTION:
            {
                return {
                    ...state
                }
            }
        case InfectionsActionsType.GET_INFECTION_SUCCESS:
            {
                const infectionToEdit = { ...(<Infection>action.payload) };
                return {
                    ...state,
                    infectionToEdit,
                };
            }
        case InfectionsActionsType.GET_INFECTION_ERROR:
            {
                const error = action.payload;
                return {
                    ...state,
                    error,
                };
            }
        case InfectionsActionsType.UPDATE_INFECTION:
            {
                return {
                    ...state
                };
            }
        case InfectionsActionsType.UPDATE_INFECTION_SUCCESS:
            {
                const infection = { ...<Infection>action.payload };
                const data = [...state.data];
                const index = data.findIndex(el => el.id === infection.id);
                data[index] = infection;
                console.log('update infection');
                return {
                    ...state,
                    data,
                    infectionToEdit: null,
                };
            }
        case InfectionsActionsType.UPDATE_INFECTION_ERROR:
            {
                const error = action.payload;
                return {
                    ...state,
                    error,
                    infectionToEdit: null,
                };
            }
        case InfectionsActionsType.ADD_INFECTION:
            {
                return {
                    ...state
                };
            }
        case InfectionsActionsType.ADD_INFECTION_SUCCESS:
            {
                const infection = { ...<Infection>action.payload };
                const data = [...state.data, infection];
                return {
                    ...state,
                    data,
                    infectionToEdit: null,
                };
            }
        case InfectionsActionsType.ADD_INFECTION_ERROR:
            {
                const error = action.payload;
                return {
                    ...state,
                    error,
                };
            }
        case InfectionsActionsType.DEL_INFECTION:
            {
                return {
                    ...state
                };
            }
        case InfectionsActionsType.DEL_INFECTION_SUCCESS:
            {
                const infection = { ...<Infection>action.payload };
                const data = state.data.filter(el => el.id != infection.id);
                console.log('delete infection');
                return {
                    ...state,
                    data,
                };
            }
        case InfectionsActionsType.DEL_INFECTION_ERROR:
            {
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
