import { ClinicsState, initialClinicState } from './clinics.state';
import { ClinicsActionsType, ClinicsActions } from './clinics.actions';
import { Clinic } from '../../models';

export function clinicsReducer(
    state: ClinicsState = initialClinicState,
    action: ClinicsActions
) {
    switch (action.type) {
        case ClinicsActionsType.GET_CLINICS:
        case ClinicsActionsType.GET_CLINIC:
        case ClinicsActionsType.DEL_CLINIC:
        case ClinicsActionsType.ADD_CLINIC_SUCCESS:
            {
                return {
                    ...state
                }
            }
        case ClinicsActionsType.GET_CLINICS_SUCCESS:
            {
                const data = [...(<Clinic[]>action.payload)];
                return {
                    ...state, data
                };
            }
        case ClinicsActionsType.GET_CLINIC_SUCCESS:
            {
                const clinicToEdit = { ...(<Clinic>action.payload) };
                return {
                    ...state,
                    clinicToEdit
                };
            }
        case ClinicsActionsType.UPDATE_CLINIC:
            {
                return {
                    ...state,
                    clinicToEdit: null,
                }
            }
        case ClinicsActionsType.UPDATE_CLINIC_SUCCESS:
            {
                const clinic = { ...(<Clinic>action.payload) };
                const data = [...state.data];
                const index = data.findIndex(el => el.id == clinic.id);
                data[index] = clinic;
                return {
                    ...state,
                    data,
                    clinicToEdit: null,
                };
            }
        case ClinicsActionsType.DEL_CLINIC_SUCCESS:
            {
                const clinic = { ...(<Clinic>action.payload) };
                const data = state.data.filter(el => el.id != clinic.id);
                return {
                    ...state,
                    data,
                };
            }
        case ClinicsActionsType.ADD_CLINIC:
            {
                const clinic = { ...(<Clinic>action.payload) };
                const data = [...state.data, clinic];
                return {
                    ...state,
                    data,
                };
            }
        case ClinicsActionsType.GET_CLINIC_ERROR:
        case ClinicsActionsType.GET_CLINICS_ERROR:
        case ClinicsActionsType.UPDATE_CLINIC_ERROR:
        case ClinicsActionsType.DEL_CLINIC_ERROR:
        case ClinicsActionsType.ADD_CLINIC_ERROR:
            {
                const error = action.payload;
                return {
                    ...state,
                    error,
                };
            }
        default: {
            return state;
        }
    }
}
