import { ClinicState, initialClinicState } from './clinic.state';
import { ClinicActionsType, ClinicsActions } from './clinic.actions';
import { Clinic } from '../../models';

export function clinicReducer(state: ClinicState = initialClinicState, action: ClinicsActions) {
    switch (action.type) {
        case ClinicActionsType.GET_CLINICS:
            {
                return {
                    ...state
                }
            }
        case ClinicActionsType.GET_CLINICS_SUCCESS:
            {
                const data = [...(<Clinic[]>action.payload)];
                return {
                    ...state, data
                };
            }
        default: {
            return state;
        }
    }
}
